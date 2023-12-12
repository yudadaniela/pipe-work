import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//especifica el alcance 
})
export class BookService {

  constructor() { }
  getBook(){
    return['Book1', 'Book2', 'Book3']
  }
}
