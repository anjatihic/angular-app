import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit{
  @Input() loadedBook: Book = new Book();

  bookAuthor: Author = new Author();

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    let authorId = this.loadedBook.authorId;
    this.authorService.getAuthorById(authorId).subscribe( res => {
      this.bookAuthor = res;
    })
    
  }
}
