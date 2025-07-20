import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.less'],
  standalone: true,
  imports: [HttpClientModule, CommonModule],
})
export class CustomModal implements OnInit {
  @Output() close = new EventEmitter<void>();

  games: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/games.json').subscribe({
      next: data => this.games = data,
      error: err => console.error(`Failed to load games: ${err.message}`),
    })
  }

  closeModal() {
    this.close.emit();
  }
}
