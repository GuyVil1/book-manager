import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { TableRowComponent } from './components/table-row/table-row.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TableRowComponent,
    BooksViewComponent,
    ErrorViewComponent
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
