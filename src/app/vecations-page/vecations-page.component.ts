import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RequestCardComponent } from '../request-card/request-card.component';
import { PaginationComponentComponent } from '../pagination-component/pagination-component.component';
import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-vecations-page',
  standalone: true,
  imports: [SearchBarComponent,RequestCardComponent,PaginationComponentComponent],
  templateUrl: './vecations-page.component.html',
  styleUrl: './vecations-page.component.css'
})
export class VecationsPageComponent {
  users=DUMMY_USERS;
  
  

}
