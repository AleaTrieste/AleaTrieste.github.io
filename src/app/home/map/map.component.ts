import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import Translatable from '../../shared/translatable';
import { LinkIconComponent } from "../../shared/link-icon/link-icon.component";
import { EMAIL, FACEBOOK, FACEBOOK_PATH, INSTAGRAM, INSTAGRAM_PATH, PEC } from '../../../variables/img-paths';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LinkIconComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.less'
})
export class MapComponent extends Translatable {
  email = EMAIL;
  pec = PEC;

  facebookSrc = FACEBOOK_PATH;
  facebookUrl = FACEBOOK;

  instagramSrc = INSTAGRAM_PATH;
  instagramUrl = INSTAGRAM;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, translationService: TranslationService) {
    super(translationService);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet')
        .then((leaflet) => {
          const map = leaflet.map('leaflet-map').setView([45.65252501572433, 13.777814146974686], 23);
          leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

          const customIcon = leaflet.icon({
            iconUrl: 'assets/img/marker.png',  // Percorso relativo alla cartella 'assets'
            iconSize: [64, 64],
            iconAnchor: [32, 64],
            popupAnchor: [0, -64]
          });

          const marker = leaflet.marker([45.653817, 13.775349], { icon: customIcon }).addTo(map);
          marker.bindPopup("Via del Lavatoio 5");
        });
    }
  }
}
