import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  imports: [],
  templateUrl: './first-page.component.html',
  standalone: true,
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

  compteur: number = 0;

  increment() {
    this.compteur++;
  }

  decrement() {
    this.compteur--;
  }
}
