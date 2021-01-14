import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/book-model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-new-book-view',
  templateUrl: './new-book-view.component.html',
  styleUrls: ['./new-book-view.component.css']
})
export class NewBookViewComponent implements OnInit {


  book: Book;

  constructor(private bookService: BookService, private router : Router) {
    this.book = new Book('', '', '', '', 'Disponible');
  }

  ngOnInit(): void {
    this.book = new Book('', '', '', '', 'Disponible');
  }

  /**
   * Methode appelée quand le user clique sur le bouton de soumission
   * du formulaire
   * @param form 
   */
  onSubmitNewBook(){
    console.log(this.book);
    //J'ajoute le livre créer dans ma collection
    this.bookService.addBook(this.book);
    //et je renvoie sur la liste de livre
    this.router.navigate(['books']);
  }

}
