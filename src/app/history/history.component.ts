import { Component } from '@angular/core';
import { HistoryCardComponent } from '../history-card/history-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [HistoryCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  cards = [
    {
      title: 'annual vacation',
      dateRange: '2023-03-02',
      duration: '8 days',
      approvedBy: 'hazem azmi'
    },
    {
      title: 'sick vacation',
      dateRange: '2023-03-02',
      duration: '8 days',
      approvedBy: 'hazem azmi'
    },
    {
      title: 'no paid vacation',
      dateRange: '2023-03-02',
      duration: '8 days',
      approvedBy: 'hazem azmi'
    }
  ];

  getRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards[randomIndex];
  }
}
