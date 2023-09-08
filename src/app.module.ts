import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiComponent } from './app/components/multi.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
