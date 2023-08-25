import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NatureCardsComponent } from './nature-cards/nature-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NatureCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
