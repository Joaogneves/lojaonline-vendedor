import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarOpcionaisComponent } from './adicionar-opcionais.component';

const routes: Routes = [{ path: '', component: AdicionarOpcionaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarOpcionaisRoutingModule { }
