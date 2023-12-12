import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { CardComponent } from './card/card.component';
import { UiDirective } from './card/card.directive';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CardComponent,
    UiDirective
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
