import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Genre } from 'src/app/models/genre.model';
import { BookService } from 'src/app/services/book.service';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-specific-genre',
  templateUrl: './specific-genre.component.html',
  styleUrls: ['./specific-genre.component.css']
})
export class SpecificGenreComponent implements OnInit{
  loadedGenre = new Genre();
  booksOfGenre: Book[] = [];

  constructor(
    private route: ActivatedRoute, 
    private genreService: GenreService, 
    private bookService: BookService) {}

  ngOnInit(): void {
    let genreId = this.route.snapshot.params['id'];
    this.genreService.getGenreById(genreId);
    this.genreService.loadedGenreSub.subscribe(res => this.loadedGenre = res);
    this.bookService.getAllBooks().subscribe(res => {
      this.booksOfGenre = res.filter(book => book.genreId == genreId);
    })
  }

}
