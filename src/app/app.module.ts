import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { TableRowComponent } from './components/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // import de mon service
  providers: [BookService],
  // import bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
