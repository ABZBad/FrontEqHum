import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProspectoListComponent } from './views/Prospecto-list/Prospecto-list.component';
import { ProspectoDetailComponent } from './views/Prospecto-detail/Prospecto-detail.component';
import { AppRouter } from './app.routes'; // Importar el archivo de rutas
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AppConfig } from './app.config';
import { MenuComponent } from "./menu/menu.component";
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        ProspectoListComponent,
        ProspectoDetailComponent
    ],
    providers: [AppConfig],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        // FontAwesomeModule,
        CommonModule,
        AppRouter,
        MenuComponent
    ]
})
export class AppModule { }