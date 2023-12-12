import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books:string[]=[]
  constructor( private bookService:BookService){}
  ngOnInit(): void {
   this.books= this.bookService.getBook()
  }

}
