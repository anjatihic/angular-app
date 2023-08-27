import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  error = new Subject<string>();
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/author.json";
  
  constructor( private http: HttpClient) { }

  createNewAuthor(
    fName: string, lName: string,
    profilePicUrl: string, dateBorn: string, bio: string,
    dateDied?: string
  ){
    
    const authorData = new Author(fName, lName, profilePicUrl, dateBorn, bio, dateDied);
    
    if(dateDied){
      
      authorData.dateDied = new Date(dateDied!);
    }

    this.http.post(this.DATABASE_URL, authorData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        this.error.next(error.message);
      })


  }
}
