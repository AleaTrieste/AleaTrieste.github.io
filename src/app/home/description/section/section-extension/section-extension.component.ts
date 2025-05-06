import { Component, ComponentRef, HostListener, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-section-extension',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './section-extension.component.html',
  styleUrl: './section-extension.component.less'
})
export class SectionExtensionComponent {
  @Input("title") title: string | undefined;
  @Input("expansion") expansion: any[] | undefined;

  @Input() componentRef!: ComponentRef<SectionExtensionComponent> | undefined;

  @HostListener('click')
  toggleExpand() {
    this.destroy();
  }

  destroy() {
    document.body.style.overflow = "auto";
    this.componentRef?.destroy();
  }
}
