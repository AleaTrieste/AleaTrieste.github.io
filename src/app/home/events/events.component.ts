import { NgClass, NgFor } from '@angular/common';
import { Component, ComponentRef } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { SectionExtensionComponent } from '../description/section/section-extension/section-extension.component';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './events.component.html',
  styleUrl: './events.component.less'
})
export class EventsComponent {
  private popupRef: ComponentRef<SectionExtensionComponent> | undefined;
  currentIndex: number | undefined;

  constructor(private translationService: TranslationService, private uiService: UiService) {
  }

  getEvents(): any[] {
    const events = this.translationService.get('EVENTS');
    if (this.currentIndex == undefined) {
      const now = new Date();

      for (let i = 0; i < events.length; i++) {
        const e = events[i];
        const date = new Date(e.DATE);
        if (date >= now) {
          this.currentIndex = i;
          break;
        }
      }
      if (this.currentIndex == undefined) {
        this.currentIndex = events.length - 1;
      }
    }
    return events;
  }

  getExpandText(): string {
    return this.translationService.get('EXPAND_TEXT');
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  nextSlide() {
    if (this.currentIndex !== undefined) {
      this.currentIndex = (this.currentIndex + 1) % this.getEvents().length;
    }
  }

  prevSlide() {
    if (this.currentIndex !== undefined) {
      this.currentIndex = (this.currentIndex - 1 + this.getEvents().length) % this.getEvents().length;
    }
  }

  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private isDragging: boolean = false;
  private readonly swipeThreshold: number = 50; // Distanza minima per considerare uno swipe

  // Calcolo del valore di spostamento per centrare la carta `.large`.
  get translateX(): string {
    if (this.currentIndex !== undefined) {
      const cardWidth = 30; // Larghezza base delle carte in px.
      const cardGap = 1; // Spazio tra le carte in px.
      const offset = (cardWidth + cardGap) * this.currentIndex;

      // Lo slider si sposta verso sinistra di un multiplo della larghezza.
      return `translateX(calc(50% - ${offset}%))`;
    }
    return "";
  }

  getCardClass(index: number) {
    if (this.currentIndex !== undefined) {
      if (index === this.currentIndex) {
        return 'large';
      } else if (
        index === (this.currentIndex + 1) % this.getEvents().length || (this.currentIndex === this.getEvents().length - 1 && index === 0)
      ) {
        return 'medium';
      } else {
        return 'small';
      }
    }
    return '';
  }

  interact(index: number, card: any) {
    if (this.currentIndex !== index) {
      this.goToSlide(index);
    } else {
      this.expand(card);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  expand(card: any) {
    if (this.popupRef) {
      this.popupRef.destroy();
    } else {
      var popupContainer = this.uiService.getPopupContainer();
      if (popupContainer) {
        this.popupRef = popupContainer.createComponent(SectionExtensionComponent);
        if (this.popupRef) {
          document.body.style.overflow = "hidden";
          this.popupRef.setInput('title', card.TITLE);
          this.popupRef.setInput('expansion', card.EXPANSION);
          this.popupRef.setInput('componentRef', this.popupRef);
          this.popupRef.onDestroy(() => this.popupRef = undefined);
        }
      }
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.isDragging = false;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX - this.touchStartX;
    if (Math.abs(this.touchEndX) > this.swipeThreshold) {
      this.isDragging = true;
    }
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.isDragging) {
      if (this.touchEndX < 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
    this.isDragging = false;
  }
}
