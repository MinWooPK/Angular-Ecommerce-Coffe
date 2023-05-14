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
      id: 1,
      quantity: 1,
    },
    {
      name: 'Colombia Los Naranjos',
      price: 9,
      img: '../../../../assets/Cafe1.svg',
      id: 2,
      quantity: 1,
    },
    {
      name: 'Laos Amanecer',
      price: 9,
      img: '../../../../assets/Cafe2.svg',
      id: 3,
      quantity: 1,
    },
    {
      name: 'Etiopia Yrgacheff',
      price: 9,
      img: '../../../../assets/Cafe3.svg',
      id: 4,
      quantity: 1,
    },
    {
      name: 'Kenia Ndunduri',
      price: 15,
      img: '../../../../assets/Cafe4.svg',
      id: 5,
      quantity: 1,
    },
    {
      name: 'Etiopía Sidamo',
      price: 17,
      img: '../../../../assets/Cafe5.svg',
      id: 6,
      quantity: 1,
    },
    {
      name: 'Costa Rica Monte Bello',
      price: 12,
      img: '../../../../assets/Cafe6.svg',
      id: 7,
      quantity: 1,
    },
    {
      name: 'Colombia La Casita',
      price: 9,
      img: '../../../../assets/Cafe7.svg',
      id: 8,
      quantity: 1,
    },
  ];

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart(card: Card) {
    this.shoppingCartService.addToCart(card);
  }

  getCartItems(): Card[] {
    return this.shoppingCartService.getCartItems();
  }

  FirstFourCards: Card[] = this.Cards.slice(0, 4);
}
