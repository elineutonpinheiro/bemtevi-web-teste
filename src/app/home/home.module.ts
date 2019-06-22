import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule { }

//Verificar como deixar os modulos de menu e toobar aqui, em vez de AppModule
