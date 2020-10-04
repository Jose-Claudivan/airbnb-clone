import { MatToolbarModule } from '@angular/material/toolbar';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImovelListComponent } from './imovel-list/imovel-list.component';
import { CommonModule } from '@angular/common';
import { ImovelMapaComponent } from './imovel-mapa/imovel-mapa.component';
import { ImovelViewComponent } from './imovel-view/imovel-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ImovelListComponent,
    ImovelMapaComponent,
    ImovelViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmkFr8N0ka5tI0LStzPl7Pn91GN4sKZ60',
      libraries: ["places", "geometry"]
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
