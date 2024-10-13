import { CommonModule, DatePipe  } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css',
  providers: [DatePipe]
})
export class RequestCardComponent {
  @Input() id! :string;
  @Input() name! :string;
  @Input() avatar! :string;
  @Input() submission! :string;
  @Input() salary! :string;
  @Input() duration!: { start: string, end: string };
  

  constructor(private datePipe: DatePipe) {}

  get imagePath(){
    return 'users/' + this.avatar;
  }
  
  calculateDuration(): number {
    const startDate = new Date(this.duration.start);
    const endDate = new Date(this.duration.end);
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return dayDiff;
  
}
}
