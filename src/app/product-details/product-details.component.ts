import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // product property
  product;

  // configuring the component to use tow services by injecting the ActivatedRoute and CartService
  constructor(private route: ActivatedRoute, private cartService: CartService) {
  }

  // ngOnInit() method
  // subscribe to route parameters
  // fetch the product based on the productId.
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
  // The addToCart() method does the following three things:
  // Receives the current product.
  // Uses the cart service's addToCart() method to add the product the cart.
  // Displays a message that you've added a product to the cart.
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Great! your product has been added to the cart!');
  }
}
