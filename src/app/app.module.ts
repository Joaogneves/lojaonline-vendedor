import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { PageHeaderComponent } from './page-header/page-header.component';

import { intercept } from './http-interceptors/intercept';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    intercept
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
