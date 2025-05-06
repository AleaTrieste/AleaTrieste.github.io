import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
  private popupContainer: ViewContainerRef | undefined;

  setPopupContainer(component: ViewContainerRef) {
    this.popupContainer = component;
  }

  getPopupContainer(): ViewContainerRef | undefined {
    return this.popupContainer;
  }
}
