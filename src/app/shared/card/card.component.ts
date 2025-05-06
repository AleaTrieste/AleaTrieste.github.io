import { Component, Input } from '@angular/core';
import Card from '../../../models/Card';
import { PictureFrameComponent } from "../picture-frame/picture-frame.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PictureFrameComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {
  @Input() card!: Card;
}
