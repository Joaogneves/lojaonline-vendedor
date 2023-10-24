import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldsRoutingModule } from './solds-routing.module';
import { SoldsComponent } from './solds.component';


@NgModule({
  declarations: [
    SoldsComponent
  ],
  imports: [
    CommonModule,
    SoldsRoutingModule,
  ]
})
export class SoldsModule { }
