import { Component, ComponentRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionComponent } from "./section/section.component";
import { TranslationService } from '../../../services/translation.service';
import { GameSectionComponent } from "./game-section/game-section.component";
import { SectionExtensionComponent } from './section/section-extension/section-extension.component';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [SectionComponent, NgFor, GameSectionComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.less'
})
export class DescriptionComponent {
  private popupRef: ComponentRef<SectionExtensionComponent> | undefined;

  constructor(private translationService: TranslationService, private uiService: UiService) { }

  getDescription(): any[] | undefined {
    return this.translationService.get('DESCRIPTION');
  }

  getGames(): any[] | undefined {
    return this.translationService.get('GAMES');
  }

  togglePopup(title: string | undefined, expansion: any | undefined) {
    if (this.popupRef) {
      this.popupRef.destroy();
    } else {
      var popupContainer = this.uiService.getPopupContainer();
      if (popupContainer) {
        this.popupRef = popupContainer.createComponent(SectionExtensionComponent);
        if (this.popupRef) {
          document.body.style.overflow = "hidden";
          this.popupRef.setInput('title', title);
          this.popupRef.setInput('expansion', expansion);
          this.popupRef.setInput('componentRef', this.popupRef);
          this.popupRef.onDestroy(() => this.popupRef = undefined);
        }
      }
    }
  }
}
