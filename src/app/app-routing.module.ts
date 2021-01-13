import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

const routes: Routes = [
  { path: '', component: BooksViewComponent },
  { path: 'books', component: BooksViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  //si l'utilisateur tape une url qui n'existe pas on redirige vers la page 404
  { path: '**', redirectTo : 'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
