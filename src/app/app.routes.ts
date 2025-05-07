import { Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';

export const routes: Routes = [
    { path: '', component: LangingPageComponent },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
   
  ];
