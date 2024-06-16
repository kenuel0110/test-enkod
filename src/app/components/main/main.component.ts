import { AppRoutingModule } from './../../app.routes.module';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface City {
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  constructor(private router: Router) {}
  selectedButton: string = 'list';

  cities: City[] = [
    {
      title: 'Москва',
      description: 'Столица России',
      image: 'https://www.funnyart.club/uploads/posts/2022-02/1645534809_3-www-funnyart-club-p-anime-v-realnoi-zhizni-art-3.jpg',
      isFavorite: false
    },
    {
      title: 'Санкт-Петербург',
      description: 'Культурная столица России',
      image: 'https://i.pinimg.com/originals/04/1b/16/041b161381f5dc597d1467349bf8edad.jpg',
      isFavorite: true
    }
    // Другие города
  ];

  selectButton(button: string) {
    this.selectedButton = button;
  }

  toggleFavorite(city: City) {
    city.isFavorite = !city.isFavorite;
  }
  goToPage(): void {
    this.router.navigate(['/new']);
  }
}
