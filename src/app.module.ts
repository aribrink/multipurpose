import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiComponent } from './app/components/multi.component';
import { ListLayoutComponent } from './app/components/child-components/list-layout.component';
import { DetailsLayoutComponent } from './app/components/child-components/details-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    MultiComponent,
    ListLayoutComponent,
    DetailsLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
