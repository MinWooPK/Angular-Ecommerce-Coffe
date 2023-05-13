import { Component } from '@angular/core';
import { faq } from 'src/app/interface';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqs: faq[] = [
    {
      title: '¿Cómo hago el pedido?',
      detail:
        'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.',
    },
    {
      title: '¿Por qué los precios son tan bajos?',
      detail:
        'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible. ',
    },
    {
      title: '¿Es posible enviar café a mi oficina? ',
      detail: 'Por supuesto, tan solo indicanos el domicilio de envio.',
    },
  ];
  isOpen = [false, false, false];
  isRotated = [false, false, false];

  toggleFaq(index: number) {
    this.isOpen[index] = !this.isOpen[index];

    this.isRotated[index] = !this.isRotated[index];
  }
}
