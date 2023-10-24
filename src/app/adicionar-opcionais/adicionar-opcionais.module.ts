import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdicionarOpcionaisRoutingModule } from './adicionar-opcionais-routing.module';
import { AdicionarOpcionaisComponent } from './adicionar-opcionais.component';


@NgModule({
  declarations: [
    AdicionarOpcionaisComponent
  ],
  imports: [
    CommonModule,
    AdicionarOpcionaisRoutingModule, 
    FormsModule
  ]
})
export class AdicionarOpcionaisModule { }
