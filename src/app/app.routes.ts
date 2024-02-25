import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProspectoListComponent } from './views/Prospecto-list/Prospecto-list.component';
import { ProspectoDetailComponent } from './views/Prospecto-detail/Prospecto-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Prospecto', pathMatch: 'full' },
    { path: 'Prospectos', component: ProspectoListComponent },
    { path: 'Prospectos/:id', component: ProspectoDetailComponent }
  ];
  
  export const AppRouter = RouterModule.forRoot(routes);