import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarImagensComponent } from './adicionar-imagens.component';

const routes: Routes = [{ path: '', component: AdicionarImagensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarImagensRoutingModule { }
