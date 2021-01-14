import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { TableRowComponent } from './components/table-row/table-row.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { BookViewComponent } from './views/book-view/book-view.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthService } from './services/auth/auth.service';
import { NewBookViewComponent } from './views/new-book-view/new-book-view.component';
import { EditBookViewComponent } from './views/edit-book-view/edit-book-view.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TableRowComponent,
    BooksViewComponent,
    ErrorViewComponent,
    BookViewComponent,
    HeaderComponent,
    AuthViewComponent,
    NewBookViewComponent,
    EditBookViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  // import de mes services
  providers: [BookService, AuthService],
  // import bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
