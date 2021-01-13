import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service'

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  books: Array<any>

  // Injection de mon service via le constructeur de l'app.component
  constructor(private BookService: BookService){
    this.books = []
  }

  ngOnInit(){
    //J'envoie le contenu des livres contenu dans ma variable books issus de mon bookservice
    this.books = this.BookService.books;
  }

   /**
    * Methode appelée quand l'utilisateur clique sur une des deux boutons de disponibilité
    * de tous les livres
    * @param newStatus 
    */
  onClickSwitchAllBooksStatus(newStatus: string){ 
    this.BookService.switchAllBooksStatus(newStatus);
  }

}
