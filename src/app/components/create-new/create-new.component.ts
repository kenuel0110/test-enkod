import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Database, getDatabase, child, set, ref, update, get} from '@angular/fire/database';

import { environment } from'../../../../environments/environment';

interface City {
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-create-new',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule
  ],
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {
  cityTitle: string = '';
  cityDescription: string = '';
  cityLink: string = '';
  form: FormGroup;

  constructor(private db: Database, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cityTitle: ['', Validators.required],
      cityDescription: ['', Validators.required],
      cityLink: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const city: City = {
        title: this.form.get('cityTitle')?.value,
        description: this.form.get('cityDescription')?.value,
        image: this.form.get('cityLink')?.value,
        isFavorite: false // или любое другое значение по умолчанию
      };
      // теперь вы можете использовать созданный экземпляр класса City
      console.log(city);
      if (city != null)
        {
          get(child(ref(this.db), `cities`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              set(ref(this.db, 'cities/' + snapshot.size), {
                title: city.title,
                description: city.description,
                image: city.image,
                isFavorite: city.isFavorite,
                id: snapshot.size
              });
              alert("Город добавлен");
              this.router.navigate(['/']);
            } else {
              console.log("Данные не найдены");
              console.log(snapshot.val());
              set(ref(this.db, 'cities/' + snapshot.size), {
                title: city.title,
                description: city.description,
                image: city.image,
                isFavorite: city.isFavorite,
                id: snapshot.size
              });
              alert("Город добавлен");
              this.router.navigate(['/']);
            }
          }).catch((error) => {
            console.error(error);
            alert(error);
          });
        }
    }
  }

  goToPage(): void {
    this.router.navigate(['/']);
  }
}
