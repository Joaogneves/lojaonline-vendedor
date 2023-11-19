import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    NgxMaskModule.forRoot(maskConfig)
  ]
})
export class ClienteModule { }
