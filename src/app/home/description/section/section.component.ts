import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../../../services/translation.service';
import Translatable from '../../../shared/translatable';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './section.component.html',
  styleUrl: './section.component.less'
})
export class SectionComponent extends Translatable {
  @Input() section: any | undefined;
  @Input() type: String = "";

  @Output() toggleExpandEvent: EventEmitter<any> = new EventEmitter();

  constructor(translationService: TranslationService) {
    super(translationService);
  }

  @HostListener('click')
  toggleExpand() {
    this.toggleExpandEvent.emit('');
  }
}
