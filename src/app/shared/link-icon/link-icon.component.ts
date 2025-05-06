import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  standalone: true,
  imports: [],
  templateUrl: './link-icon.component.html',
  styleUrls: ['./link-icon.component.less']
})
export class LinkIconComponent {
  @Input() IMG_SRC: string | undefined;
  @Input() url: string | undefined;

  redirect() {
    if (this.url) {
      // window.location.href = this.url;
      window.open(this.url, "_blank");
    }
  }
}
