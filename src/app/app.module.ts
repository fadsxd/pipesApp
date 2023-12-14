import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//TODO: CONFIGURACIÓN DEL LOCALE DE LA APP
import localEsBO from '@angular/common/locales/es-BO';

import  {registerLocaleData}  from '@angular/common';

registerLocaleData(localEsBO);


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {  provide: LOCALE_ID, useValue: 'es-BO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
