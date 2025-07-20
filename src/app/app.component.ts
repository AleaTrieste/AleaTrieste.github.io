import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { MainComponent } from "./main/main.component";
import { CustomModal} from './custom-modal/custom-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, CommonModule, MainComponent, CustomModal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'sito-web-alea';
  showModal = false;

  onOpenModal() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
  }
}
