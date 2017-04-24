import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MetaGuard } from '@nglibs/meta';
export const routes:Routes = [
  {
    path: '', 
    component: HomeComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Home',
        description: 'Description of the home page'
      }
    }
  }
];