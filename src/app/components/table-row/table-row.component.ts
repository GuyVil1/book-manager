import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {

  @Input() id : number; 
  @Input() cover : string; 
  @Input() author : string; 
  @Input() title : string; 
  @Input() status : string; 

  nextStatus : string;
  detailsUrl: string;
  editUrl: string;

  constructor(private bookService : BookService) {
    this.id = 0;
    this.cover = "";
    this.author = "";
    this.title = "";
    this.status = "";

    this.nextStatus = ""; 
    this.detailsUrl = "";
    this.editUrl = "";

   }

  ngOnInit(): void {
    this.detailsUrl = "/book/" + this.id;
    this.editUrl = "/book/edit/" + this.id;
  }

  ngOnChanges(): void{
    ///condition ternaire selon le status du livre, lorsqu'il y a action de l'utilisateur la variable change
    this.nextStatus = this.status === "Disponible" ? "Emprunté" : "Disponible";

  }

  /** 
   * Methode pour basculer individuellement le statut d'un livre
   */

  onClickSwitchBookStatus(newStatus : string){
    //le + devant le id, vient caster l'id en number si on est pas certain que ce soit un number
    this.bookService.switchBookStatus(+this.id, newStatus);
  }

}
