import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [ProfileComponent,RouterModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {

}
