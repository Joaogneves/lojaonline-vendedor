import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'carroadd', loadChildren: () => import('./adicionar-carro/adicionar-carro.module').then(m => m.AdicionarCarroModule) },
  { path: 'imgadd/:id', loadChildren: () => import('./adicionar-imagens/adicionar-imagens.module').then(m => m.AdicionarImagensModule) }, 
  { path: 'optadd/:id', loadChildren: () => import('./adicionar-opcionais/adicionar-opcionais.module').then(m => m.AdicionarOpcionaisModule) }, 
  { path: 'gerenciar', loadChildren: () => import('./gerenciar/gerenciar.module').then(m => m.GerenciarModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'edit/:id', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) },
  { path: 'solds', loadChildren: () => import('./solds/solds.module').then(m => m.SoldsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
