import {Injectable} from '@angular/core';
//  inject the HttpClient service into your service so the app can fetch data and interact with external APIs and resources.
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // store the array of the current products in the cart.
  items = [];
  // Injection of the HttpClient service.
  constructor(
    private http: HttpClient
  ) {}
  // Method appends a product to an array of items.
  addToCart(product) {
    this.items.push(product);
  }

// Method collects the items users add to the cart and returns each item with its associated quantity.
  getItems() {
    return this.items;
  }

// Method returns an empty array of items
  clearCart() {
    this.items = [];
    return this.items;
  }
  // Method to retrieve the shipping data.
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
