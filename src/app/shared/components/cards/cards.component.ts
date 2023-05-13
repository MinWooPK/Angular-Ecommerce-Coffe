import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interface';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() view: string = '';

  Cards: Card[] = [
    {
      name: 'Costa Rica Tarrazú',
      price: 9,
      img: '../../../../assets/Cafe0.svg',
    },
    {
      name: 'Colombia Los Naranjos',
      price: 9,
      img: '../../../../assets/Cafe1.svg',
    },
    {
      name: 'Laos Amanecer',
      price: 9,
      img: '../../../../assets/Cafe2.svg',
    },
    {
      name: 'Etiopia Yrgacheff',
      price: 9,
      img: '../../../../assets/Cafe3.svg',
    },
    {
      name: 'Kenia Ndunduri',
      price: 15,
      img: '../../../../assets/Cafe4.svg',
    },
    {
      name: 'Etiopía Sidamo',
      price: 17,
      img: '../../../../assets/Cafe5.svg',
    },
    {
      name: 'Costa Rica Monte Bello',
      price: 12,
      img: '../../../../assets/Cafe6.svg',
    },
    {
      name: 'Colombia La Casita',
      price: 9,
      img: '../../../../assets/Cafe7.svg',
    },
  ];

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(card: Card) {
    this.shoppingCartService.addToCart(card);
    console.log(this.shoppingCartService.cartItems);
  }

  getCartItems(): Card[] {
    return this.shoppingCartService.getCartItems();
  }

  FirstFourCards: Card[] = this.Cards.slice(0, 4);
}
