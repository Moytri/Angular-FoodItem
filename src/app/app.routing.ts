import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
