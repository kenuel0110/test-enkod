import { AppRoutingModule } from './../../app.routes.module';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Database, getDatabase, child, set, ref, update, get} from '@angular/fire/database';

interface City {
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
  id: number;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  cities: City[] = [];
  selectedButton: string = 'list';

  constructor(private db: Database, private router: Router) {
    get(child(ref(this.db), `cities`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.cities = [];
        snapshot.forEach((childSnapshot) => {
          this.cities.push(childSnapshot.val());
        });
        console.log(this.cities);
      } else {
        console.log("Данные не найдены");
        alert("Данные не найдены");
      }
    }).catch((error) => {
      console.error(error);
      alert(error);
    });
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

  toggleFavorite(city: City) {
    city.isFavorite = !city.isFavorite;
    const cityRef = ref(this.db, `cities/${city.id}`);
    update(cityRef, { isFavorite: city.isFavorite });
  }
  goToPage(): void {
    this.router.navigate(['/new']);
  }
}
