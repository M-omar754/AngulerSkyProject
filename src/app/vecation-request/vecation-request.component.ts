import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { VecationsPageComponent } from '../vecations-page/vecations-page.component';
import { RequestCardComponent } from '../request-card/request-card.component';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-vecation-request',
  standalone: true, 
  imports: [SearchBarComponent,RouterModule,VecationsPageComponent,RequestCardComponent],
  templateUrl: './vecation-request.component.html',
  styleUrl: './vecation-request.component.css'
})
export class VecationRequestComponent {
users =DUMMY_USERS;

}
