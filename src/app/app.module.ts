import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { ImovelDetalhesComponent } from './imovel-detalhes/imovel-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    ImovelListComponent,
    ImovelMapaComponent,
    ImovelViewComponent,
    HeaderComponent,
    ImovelDetalhesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmkFr8N0ka5tI0LStzPl7Pn91GN4sKZ60',
      libraries: ["places", "geometry"]
    }),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
