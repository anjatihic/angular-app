import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-specific-author',
  templateUrl: './specific-author.component.html',
  styleUrls: ['./specific-author.component.css']
})
export class SpecificAuthorComponent implements OnInit{
  loadedAuthor = new Author();
  booksOfAuthor: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private bookService: BookService
  )  {}

  ngOnInit(): void {
    let authorId = this.route.snapshot.params['id'];
    this.authorService.getAuthorById(authorId).subscribe( res => {
      this.loadedAuthor = res;
    })

    this.bookService.getAllBooks().subscribe (res => {
      this.booksOfAuthor = res.filter(book => book.authorId == authorId);
    })
  }

}
