import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdicionarImagensRoutingModule } from './adicionar-imagens-routing.module';
import { AdicionarImagensComponent } from './adicionar-imagens.component';


@NgModule({
  declarations: [
    AdicionarImagensComponent
  ],
  imports: [
    CommonModule,
    AdicionarImagensRoutingModule,
    FormsModule
  ]
})
export class AdicionarImagensModule { }
