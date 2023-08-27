import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-specific-genre',
  templateUrl: './specific-genre.component.html',
  styleUrls: ['./specific-genre.component.css']
})
export class SpecificGenreComponent implements OnInit{
  loadedGenre = new Genre();

  constructor(private route: ActivatedRoute, private genreService: GenreService) {}

  ngOnInit(): void {
    let genreId = this.route.snapshot.params['id'];
    this.genreService.getGenreById(genreId);
    this.genreService.loadedGenreSub.subscribe(res => this.loadedGenre = res);
  }

}
