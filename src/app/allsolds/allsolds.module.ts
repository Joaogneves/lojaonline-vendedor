import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllsoldsRoutingModule } from './allsolds-routing.module';
import { AllsoldsComponent } from './allsolds.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllsoldsComponent
  ],
  imports: [
    CommonModule,
    AllsoldsRoutingModule,
    FormsModule
  ]
})
export class AllsoldsModule { }
