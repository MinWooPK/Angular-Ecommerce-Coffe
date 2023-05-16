import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  selectedMap: string = 'callao';

  selectMap(mapId: string) {
    this.selectedMap = mapId;
  }
}
