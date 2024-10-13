import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VecationsPageComponent } from './vecations-page/vecations-page.component';

const routeConfig: Routes = [
    {
        path: '',
        redirectTo: 'home',  
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
    {
        path: 'profile',
        component:ProfileComponent,
        title: 'Profile Page'
    },
    {
      path: 'vecations-page',
      component:VecationsPageComponent,
      title: 'Vecations Page'
    }
];
export default routeConfig;
