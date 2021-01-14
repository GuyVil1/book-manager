import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Models/book-model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-edit-book-view',
  templateUrl: './edit-book-view.component.html',
  styleUrls: ['./edit-book-view.component.css']
})
export class EditBookViewComponent implements OnInit {

  book : Book;
  constructor(private route : ActivatedRoute, 
              private router : Router, 
              private bookService : BookService) { 
                this.book = new Book("", "", "", "", "");
              }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.book = this.bookService.getElementById(+id);
  }

  /**
   * Appelée quand le user modifier un livre
   */
  onSubmitEditBook(){
    this.bookService.updateBook(this.book);
    this.router.navigate(['books']);
  }
}
