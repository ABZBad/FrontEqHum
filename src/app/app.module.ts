import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProspectoListComponent } from './views/Prospecto-list/Prospecto-list.component';
import { ProspectoDetailComponent } from './views/Prospecto-detail/Prospecto-detail.component';
import { AppRouter } from './app.routes'; // Importar el archivo de rutas
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    ProspectoListComponent,
    ProspectoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter,
    CommonModule
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }