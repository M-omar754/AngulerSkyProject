import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {
  @Input() title!: string;
  @Input() dateRange!: string;
  @Input() duration!: string;
  @Input() approvedBy!: string;
}
