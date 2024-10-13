import { Component } from '@angular/core';
import { PendingCardComponent } from '../pending-card/pending-card.component';
import { RouterModule } from '@angular/router';
import { VecationsPageComponent } from '../vecations-page/vecations-page.component';

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [PendingCardComponent,RouterModule,VecationsPageComponent],
  templateUrl: './pending-requests.component.html',
  styleUrl: './pending-requests.component.css'
})
export class PendingRequestsComponent {

}
