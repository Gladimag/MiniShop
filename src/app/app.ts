import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = ['🥛 Молоко', '🍞 Хлеб', '🍎 Яблоки'];
  cart: string[] = [];

  add(product: string) {
    this.cart.push(product);
  }
}
