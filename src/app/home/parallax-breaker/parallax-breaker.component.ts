import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-parallax-breaker',
  standalone: true,
  imports: [],
  templateUrl: './parallax-breaker.component.html',
  styleUrl: './parallax-breaker.component.less'
})
export class ParallaxBreakerComponent {
  @Input("imgPath") imgPath: String | undefined;
  scrollPosition: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY * 0.5; // Effetto di parallasse
  }
}
