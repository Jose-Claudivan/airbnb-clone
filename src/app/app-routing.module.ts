import { ImovelListComponent } from './imovel-list/imovel-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImovelViewComponent } from './imovel-view/imovel-view.component';
import { ImovelDetalhesComponent } from './imovel-detalhes/imovel-detalhes.component';

const routes: Routes = [
  {path: '', component: ImovelListComponent},
  {path: 'detalhes/:id', component: ImovelDetalhesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
