import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { EventsComponent } from './events/events.component';
import { DescriptionComponent } from "./description/description.component";
import { ParallaxBreakerComponent } from "./parallax-breaker/parallax-breaker.component";
import { HEADER_PATH } from '../../variables/img-paths';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent, EventsComponent, DescriptionComponent, ParallaxBreakerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  headerPath = HEADER_PATH;
}
