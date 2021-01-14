import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard/auth-guard.service';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { BookViewComponent } from './views/book-view/book-view.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { EditBookViewComponent } from './views/edit-book-view/edit-book-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { NewBookViewComponent } from './views/new-book-view/new-book-view.component';

const routes: Routes = [
  // j'utilise la methode canActivate créer dans mon auth-guard pour 
  // sécuriser les pages qui ne doivent être accessible que par 
  // les utilisateurs connectés
  { path: '', canActivate:[AuthGuardService],component: BooksViewComponent },
  { path: 'books', canActivate:[AuthGuardService], component: BooksViewComponent },
  { path: 'book/new', canActivate:[AuthGuardService], component: NewBookViewComponent },
  { path: 'book/edit/:id', canActivate:[AuthGuardService], component: EditBookViewComponent },
  { path: 'book/:id', canActivate:[AuthGuardService], component: BookViewComponent },
  { path: 'auth', component: AuthViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  //si l'utilisateur tape une url qui n'existe pas on redirige vers la page 404
  { path: '**', redirectTo : 'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
