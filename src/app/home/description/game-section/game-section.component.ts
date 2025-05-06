import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-section',
  standalone: true,
  imports: [],
  templateUrl: './game-section.component.html',
  styleUrl: './game-section.component.less'
})
export class GameSectionComponent {
  @Input() imgSrc: string | undefined;
  @Input() altText: string | undefined;

  @Output() toggleExpandEvent: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  toggleExpand() {
    this.toggleExpandEvent.emit('');
  }
}
