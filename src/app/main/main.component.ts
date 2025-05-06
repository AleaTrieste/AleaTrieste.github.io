import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent {

}
