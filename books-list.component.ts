import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent, EditBookComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  title="liste des livres:";
  books = [
    new Book(1,  "Atomic Habits", "James Clear",  35),
    new Book(2,  "the slight edge", "Jeff Olsen", 30),
    new Book( 3,"power of habits",  "...", 25),
  
];
action="";
changeAction(action: string){
  this.action=action;
}
addBook(book:Book){
  this.books=[...this.books,book];
  this.changeAction("");
}
bookEdit(book:Book){
  this.books=[...this.books,book];
  this.changeAction("");
}
}
