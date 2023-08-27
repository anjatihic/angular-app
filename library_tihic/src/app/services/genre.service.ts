import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import {Subject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  error = new Subject<string>();
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/genre.json"

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

    return this.http.get(this.DATABASE_URL)
      .pipe( map((res: any) => {
        const allGenres = [];
        for(let key in res){
          allGenres.push({...res[key], id: key});
        }
        return allGenres;
      }))
  }

}
