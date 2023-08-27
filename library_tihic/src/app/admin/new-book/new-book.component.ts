import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  allGenres: Genre[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.genreService.getAllGenres();
    this.genreService.allGenresSub.subscribe( genres => {
      this.allGenres = genres;
    })
  }
}
