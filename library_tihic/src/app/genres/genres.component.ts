import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';
import { Genre } from '../models/genre.model';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit{

  allGenres: Genre[] = [];

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {

    this.genreService.getAllGenres();
    this.genreService.allGenresSub.subscribe( genres => {
      this.allGenres = genres;
    })
    
  }

}
