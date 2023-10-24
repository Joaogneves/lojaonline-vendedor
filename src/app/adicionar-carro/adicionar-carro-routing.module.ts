import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarCarroComponent } from './adicionar-carro.component';

const routes: Routes = [{ path: '', component: AdicionarCarroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarCarroRoutingModule { }
