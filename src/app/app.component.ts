import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { VecationsPageComponent } from './vecations-page/vecations-page.component';
import { DUMMY_USERS } from './dummy-users';
import { RequestCardComponent } from './request-card/request-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterModule, HomeComponent,VecationsPageComponent,RequestCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
}
