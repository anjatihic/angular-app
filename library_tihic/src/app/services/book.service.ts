import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  error = new Subject<string>();
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/book.json";

  allBooks: Book[] = [];
  loadedBookSub = new BehaviorSubject<Book>(new Book());

  constructor(private http: HttpClient) { }

  createNewBook(
    title: string,
    authorId: string,
    genreId: string,
    datePublished: string,
    synopsis: string,
    pages: number,
    coverPicUrl: string
  ) {
    const bookData = this.fillABookObject( title, authorId, genreId, datePublished, 
      synopsis, pages, coverPicUrl);

    this.http.post(this.DATABASE_URL, bookData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      })
  }

  getAllBooks(){
    return this.http.get(this.DATABASE_URL)
      .pipe(map((res: any) => {
        const books = [];
        for(let key in res){
          books.push({...res[key], id: key});
        }

        return books;
      }))
  }

  getBookById(id: string) {
    return this.getAllBooks().subscribe(res => {
      this.allBooks = res;
      let book = this.allBooks.find(b => b.id == id);
      if(book) this.loadedBookSub.next(book);
    })
  }

  deleteBookById(id: string){
    return this.http.delete("https://angular-library-8b92a-default-rtdb.firebaseio.com/book/" + id + ".json");
  }


  private fillABookObject(
    title: string,
    authorId: string,
    genreId: string,
    datePublished: string,
    synopsis: string,
    pages: number,
    coverPicUrl: string
  ): Book{
    let book = new Book();

    book.title = title;
    book.authorId = authorId;
    book.genreId = genreId;
    book.datePublished = new Date(datePublished);
    book.synopsis = synopsis;
    book.pages = pages;
    book.coverPicUrl = coverPicUrl;

    return book;
  }
}