import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author.model';
import { Genre } from 'src/app/models/genre.model';
import { AuthorService } from 'src/app/services/author.service';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  allGenres: Genre[] = [];
  allAuthors: Author[] = [];

  created: boolean = false;

  newBookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    authorId: new FormControl ('', Validators.required),
    photoUrl: new FormControl('', Validators.required),
    syn: new FormControl('', Validators.required),
    genreId: new FormControl('', Validators.required),
    pages: new FormControl('', [Validators.required, Validators.min(1)]),
    datePublished: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)])
  })

  constructor(private genreService: GenreService,
    private authorService: AuthorService) {}

  ngOnInit(): void {
    this.genreService.getAllGenres();
    this.genreService.allGenresSub.subscribe( genres => {
      this.allGenres = genres;
    })

    this.authorService.getAllAuthors();
    this.authorService.allAuthorsSub.subscribe( authors => {
      this.allAuthors = authors;
    })
  }

  onSubmit(){
    
  }
}
