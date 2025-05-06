import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  standalone: true,
  imports: [],
  templateUrl: './picture-frame.component.html',
  styleUrl: './picture-frame.component.less'
})
export class PictureFrameComponent {
  @Input("imgPath") imgPath: String | undefined;
}
