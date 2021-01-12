import { Component } from '@angular/core';
import { BookService } from './services/book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: Array<any>
  // Injection de mon service via le constructeur de l'app.component
  constructor(private BookService: BookService){
    //J'envoie le contenu des livres contenu dans ma variable books issus de mon bookservice
    this.books = this.BookService.books;
  }

  /**
   * Les méthodes pour gérer la disponibilité des livres
   */

   /**
    * Methode appelée quand l'utilisateur clique sur une des deux boutons de disponibilité
    * de tous les livres
    * @param newStatus 
    */
  onClickSwitchAllBooksStatus(newStatus: string){
    this.BookService.switchAllBooksStatus(newStatus);
  }
}
