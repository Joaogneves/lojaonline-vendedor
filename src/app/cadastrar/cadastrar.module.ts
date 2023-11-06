import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { CadastrarComponent } from './cadastrar.component';
import { NgxMaskModule } from 'ngx-mask'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ]
})
export class CadastrarModule { }
