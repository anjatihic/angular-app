import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-new-genre',
  templateUrl: './new-genre.component.html',
  styleUrls: ['./new-genre.component.css']
})
export class NewGenreComponent {

  created: boolean = false;

  newGenreForm = new FormGroup({
    name: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required)
  });

  constructor(
    private genreService: GenreService
  ) { }

  onSubmit() {
    let genreName = this.newGenreForm.controls['name'].value!;
    let aboutGenre = this.newGenreForm.controls['about'].value!
    this.newGenreForm.reset();

    this.genreService.createNewGenre(genreName, aboutGenre);
    this.created = true;

  }
}
