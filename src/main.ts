import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule) // Bootstrappear AppModule como un módulo
  .catch(err => console.error(err));
