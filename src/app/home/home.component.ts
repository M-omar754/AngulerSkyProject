import { Component } from '@angular/core';
import { HomeCardComponent } from '../home-card/home-card.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { VecationCardComponent } from '../vecation-card/vecation-card.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { VecationRequestComponent } from '../vecation-request/vecation-request.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent, RouterModule, ProfileComponent, VecationCardComponent, CarouselComponent,VecationRequestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent {

}
