import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-route',
  standalone: false,
  templateUrl: './empty-route.component.html',
  styleUrl: './empty-route.component.css'
})

export class EmptyPage {
  constructor(private router: Router) {}
  goToPage(): void {
    this.router.navigate(['/']);
  }
}
