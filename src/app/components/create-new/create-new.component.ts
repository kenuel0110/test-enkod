import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from'../../../environments/environment';

interface City {
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-create-new',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {
  cityTitle: string = '';
  cityDescription: string = '';
  cityLink: string = '';
  form: FormGroup;

  constructor(private db: AngularFireDatabase, private router: Router, private formBuilder: FormBuilder) {
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
          this.router.navigate(['/']);
        }
    }
  }

  goToPage(): void {
    this.router.navigate(['/']);
  }
}
