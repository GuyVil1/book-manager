import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<any>
  constructor() { 
    this.books = [];

    //Temporaire simuler base de donnée avec livres
    for(let i = 1; i<= 10; i++){
      this.books.push({
        id: i,
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkgOanCuZAp5Mi3qUJHp0cwnEMTx42nPy_Prf_aMgQTgo8dBYrGcuao_gnw&usqp=CAc",
        title: "livre " + i, 
        author: "auteur " + i,
        status: "Disponible"
      });
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
}
