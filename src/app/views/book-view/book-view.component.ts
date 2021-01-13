import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book : any;
  
  // activatedRoute est un service d'angular pour récupérer les paramètres de nos route
  // (pour récupérer les informations sur la route qui est active)
  constructor(private route : ActivatedRoute, private bookService : BookService) { }

  ngOnInit(): void {

    // J'encapsule grâce à activetedRoute le paramètre id qui se trouve dans mon url
    const id = this.route.snapshot.params.id;
    this.book = this.bookService.getElementById(+id);
    console.log(this.book);
  }

}
