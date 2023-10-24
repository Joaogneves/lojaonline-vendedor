import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AdicionarCarroRoutingModule } from './adicionar-carro-routing.module';
import { AdicionarCarroComponent } from './adicionar-carro.component';


@NgModule({
  declarations: [
    AdicionarCarroComponent
  ],
  imports: [
    CommonModule,
    AdicionarCarroRoutingModule,
    FormsModule,
    NgxMaskModule.forChild(),
  ]
})
export class AdicionarCarroModule { }
