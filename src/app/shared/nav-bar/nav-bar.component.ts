import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LinkIconComponent } from '../link-icon/link-icon.component';
import { LOGO_PATH, USER_PATH } from '../../../variables/img-paths';
import { PictureFrameComponent } from '../picture-frame/picture-frame.component';
import { TranslationService } from '../../../services/translation.service';
import { LinkTextComponent } from "../link-text/link-text.component";
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LinkIconComponent, PictureFrameComponent, LinkTextComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.less'
})
export class NavBarComponent implements AfterViewInit {
  userPath = USER_PATH;
  logoPath = LOGO_PATH;
  @ViewChild('popup', { read: ViewContainerRef, static: true }) popupContainer!: ViewContainerRef;

  constructor(private translationService: TranslationService, private uiService: UiService) {
  }

  ngAfterViewInit() {
    this.uiService.setPopupContainer(this.popupContainer);
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
