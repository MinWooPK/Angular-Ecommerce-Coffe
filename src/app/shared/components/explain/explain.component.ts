import { Component } from '@angular/core';
import { Detail } from 'src/app/interface';
@Component({
  selector: 'app-explain',
  templateUrl: './explain.component.html',
  styleUrls: ['./explain.component.scss'],
})
export class ExplainComponent {
  Info: Detail[] = [
    {
      title: 'Recibe tu pedido sin preocuparte',
      subtitle:
        ' Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.',
      img: '../../../../assets/Check.svg',
    },
    {
      title: 'Envío en 24/48h',
      subtitle:
        ' Pide tu café antes de las 12h y lo recibirás al día siguiente.',
      img: '../../../../assets/Track.svg',
    },
    {
      title: 'Descuentos y beneficios',
      subtitle:
        ' Cada dos meses, te regalamso una bolsa de un nuevo origen sorpresa, paraque lo descubras junto a nosotros',
      img: '../../../../assets/Gift.svg',
    },
  ];
}
