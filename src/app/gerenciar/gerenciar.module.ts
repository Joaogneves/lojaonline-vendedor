import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciarRoutingModule } from './gerenciar-routing.module';
import { GerenciarComponent } from './gerenciar.component';


@NgModule({
  declarations: [
    GerenciarComponent
  ],
  imports: [
    CommonModule,
    GerenciarRoutingModule
  ]
})
export class GerenciarModule { }
