import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { Card } from 'src/app/interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public cartItems: Card[] = [];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}
