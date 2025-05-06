import { Component } from '@angular/core';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'sito-web-alea';
}
