import { Injectable } from '@angular/core';
import { Book } from 'src/app/Models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<Book>
  constructor() { 
    this.books = [];

    //Temporaire simuler base de donnée avec livres
    for(let i = 1; i<= 10; i++){
      this.books.push(new Book(
        "livre " + i, 
        "auteur " + i,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkgOanCuZAp5Mi3qUJHp0cwnEMTx42nPy_Prf_aMgQTgo8dBYrGcuao_gnw&usqp=CAc",
        "Lorem ipsum",
        "Disponible"
      ));
    }
  }

  /**
   * Switcher le status de tous les livres
   */
  switchAllBooksStatus(newStatus: string){
    for(const book of this.books){
      book.status = newStatus;
    }
  }

  /** 
   * Switch individuel du status des book
   */
  switchBookStatus(bookId : number ,newStatus: string){
    //Je parcours la liste de livres
    for(const book of this.books){
      //et si l'id du livres correspond à l'id du livre cliqué sur le site,
      if (book.id === bookId){
        //alors je change de statut
        book.status = newStatus;
        //et je sors de la boucle
        break;
      } 
    }
  }

  /**
   * Methode pour retrouver un livre grâce à son id
   * @param bookId 
   */
  getElementById(bookId : number){
    for(const book of this.books){
      if (book.id === bookId){
        return book;
      } 
    }
    return null;
  }

  /**
   * Methode appelée par le formulaire de création 
   * d'un nouveau livre
   * @param newBook 
   */
  addBook(newBook: Book){
    this.books.push(newBook);
  }

  /**
   * Methode appelée pour mettre à jour un
   * livre à partir du composant editbook
   * @param editedBook 
   */
  updateBook(editedBook : Book){
    for(let i = 1; i < this.books.length; i++){
      if (this.books[i].id === editedBook.id){
        this.books[i] = editedBook;
        break;
      } 
    }
    return null;
  }
}
