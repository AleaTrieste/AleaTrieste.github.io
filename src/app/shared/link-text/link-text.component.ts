import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-text',
  standalone: true,
  imports: [],
  templateUrl: './link-text.component.html',
  styleUrl: './link-text.component.less'
})
export class LinkTextComponent {
  @Input() text: string | undefined;
  @Input() id: string | undefined;

  scroll() {
    if (this.id) {
      const element = document.getElementById(this.id);
      if (element) {
        const offset = window.innerHeight * 0.13; // 10vh
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }
}
