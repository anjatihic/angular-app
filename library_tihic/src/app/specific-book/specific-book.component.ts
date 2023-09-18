import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Author } from '../models/author.model';
import { AuthorService } from '../services/author.service';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-specific-book',
  templateUrl: './specific-book.component.html',
  styleUrls: ['./specific-book.component.css']
})
export class SpecificBookComponent implements OnInit{
  loadedBook = new Book();
  bookAuthor = new Author();
  userRole = '';
  isBorrowed: boolean = false; // popraviti
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    let bookId = this.route.snapshot.params['bookId'];
    let authorId = this.route.snapshot.params['authorId'];
    this.bookService.getBookById(bookId);
    this.bookService.loadedBookSub.subscribe(book => this.loadedBook = book);
    this.authorService.getAuthorById(authorId).subscribe(res => {
      this.bookAuthor = res;
    })

    this.userRole = localStorage.getItem('userRole')!;

    this.loanService.getAllCurrentLoansByUser().subscribe(res => {
      if(res){
        for(let l of res){
          if(l.book.id == this.loadedBook.id){
            this.isBorrowed = true;
            break;
          }
        }
        this.isLoading = false;
      }
    })
  }

  onDelete(){
    if(window.confirm('Are you sure?')){
      this.bookService.deleteBookById(this.loadedBook.id!).subscribe();
      this.router.navigate(['/home']);
    }
  }

  onBorrow(){
    this.loanService.createNewLoan(this.loadedBook);
    this.isBorrowed = true;
  }

}
