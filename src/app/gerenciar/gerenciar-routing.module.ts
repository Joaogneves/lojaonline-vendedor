import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarComponent } from './gerenciar.component';

const routes: Routes = [{ path: '', component: GerenciarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarRoutingModule { }
