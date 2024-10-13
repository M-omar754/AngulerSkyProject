import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { HistoryComponent } from '../history/history.component';
import { PendingRequestsComponent } from '../pending-requests/pending-requests.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileCardComponent,HistoryComponent,PendingRequestsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
