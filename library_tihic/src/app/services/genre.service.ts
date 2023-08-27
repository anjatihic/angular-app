import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import {BehaviorSubject, Subject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  error = new Subject<string>();
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/genre.json";

  allGenres: Genre[] = [];
  loadedGenreSub = new BehaviorSubject<Genre>(new Genre());

  constructor(private http: HttpClient) {
    
  }

  init(){
    
  }

  createNewGenre(name: string, about: string){
    const genreData = new Genre();
    genreData.about = about;
    genreData.name = name;

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

  getGenreById(id: string){
    return this.getAllGenres().subscribe(res => {
      this.allGenres = res;
      let genre = this.allGenres.find(g => g.id == id);
      if (genre) this.loadedGenreSub.next(genre);
    })
  }

}
