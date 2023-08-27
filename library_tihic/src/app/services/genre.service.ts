import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import {Subject} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  error = new Subject<string>();
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/genre.json"

  allGenresSub = new Subject<Genre[]>();
  allGenres: Genre[] = [];

  constructor(private http: HttpClient) { }

  createNewGenre(name: string, about: string){
    const genreData = new Genre(name, about);

    this.http.post(this.DATABASE_URL, genreData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      })
  }

  getAllGenres(){

    this.http.get(this.DATABASE_URL)
      .subscribe((res: any) => {
        for(let key in res){
          this.allGenres.push({...res[key], id: key});
        }

        this.allGenresSub.next(this.allGenres);
      })
  }

}
