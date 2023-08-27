import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createNewGenre(name: string, about: string){
    const genreData = new Genre(name, about);

    this.http.post('https://angular-library-8b92a-default-rtdb.firebaseio.com/genre.json', genreData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      })
  }
}
