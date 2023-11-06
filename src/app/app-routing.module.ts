import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './_guard/auth.guard'
import { AuthGuardAdmin } from './_guard/authAdmin.guard';

const routes: Routes = [
  { path: 'carroadd', loadChildren: () => import('./adicionar-carro/adicionar-carro.module').then(m => m.AdicionarCarroModule), canActivate:[AuthGuard]},
  { path: 'imgadd/:id', loadChildren: () => import('./adicionar-imagens/adicionar-imagens.module').then(m => m.AdicionarImagensModule), canActivate:[AuthGuard]}, 
  { path: 'optadd/:id', loadChildren: () => import('./adicionar-opcionais/adicionar-opcionais.module').then(m => m.AdicionarOpcionaisModule), canActivate:[AuthGuard] }, 
  { path: 'gerenciar', loadChildren: () => import('./gerenciar/gerenciar.module').then(m => m.GerenciarModule), canActivate:[AuthGuard] },
  { path: 'edit/:id', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule), canActivate:[AuthGuard] },
  { path: 'solds', loadChildren: () => import('./solds/solds.module').then(m => m.SoldsModule), canActivate:[AuthGuard] },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'notfound', loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule) },
  { path: 'allsolds', loadChildren: () => import('./allsolds/allsolds.module').then(m => m.AllsoldsModule), canActivate:[AuthGuardAdmin]},
  { path: 'cadastrar', loadChildren: () => import('./cadastrar/cadastrar.module').then(m => m.CadastrarModule), canActivate:[AuthGuardAdmin] },
  { path: 'unauthorized', loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule) },
  { path: 'allusers', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: '**', loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
