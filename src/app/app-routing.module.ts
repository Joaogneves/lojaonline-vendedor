import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './_guard/auth.guard'

const routes: Routes = [
  { path: 'carroadd', loadChildren: () => import('./adicionar-carro/adicionar-carro.module').then(m => m.AdicionarCarroModule), canActivate:[AuthGuard]},
  { path: 'imgadd/:id', loadChildren: () => import('./adicionar-imagens/adicionar-imagens.module').then(m => m.AdicionarImagensModule), canActivate:[AuthGuard]}, 
  { path: 'optadd/:id', loadChildren: () => import('./adicionar-opcionais/adicionar-opcionais.module').then(m => m.AdicionarOpcionaisModule), canActivate:[AuthGuard] }, 
  { path: 'gerenciar', loadChildren: () => import('./gerenciar/gerenciar.module').then(m => m.GerenciarModule), canActivate:[AuthGuard] },
  { path: 'edit/:id', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule), canActivate:[AuthGuard] },
  { path: 'solds', loadChildren: () => import('./solds/solds.module').then(m => m.SoldsModule), canActivate:[AuthGuard] },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: '**', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
