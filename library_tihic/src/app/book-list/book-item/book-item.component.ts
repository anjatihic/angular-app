import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit{
  @Input() loadedBook: Book = new Book();

  bookAuthor: Author = new Author();
  userRole: string = '';

  constructor(private authorService: AuthorService, private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    let authorId = this.loadedBook.authorId;
    this.authorService.getAuthorById(authorId).subscribe( res => {
      this.bookAuthor = res;
    })
    this.userRole = localStorage.getItem('userRole')!;

  }

  onDelete(){
    if(window.confirm('Are you sure?')){
      this.bookService.deleteBookById(this.loadedBook.id!).subscribe();
      this.router.navigate(['/home']);
    }
  }
}
