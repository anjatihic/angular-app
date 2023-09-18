import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  error = new Subject<string>();
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/author.json";

  allAuthors: Author[] = [];
  loadedAuthorSub = new BehaviorSubject<Author> (new Author());
  constructor( private http: HttpClient) { }

  createNewAuthor(
    fName: string, lName: string,
    profilePicUrl: string, dateBorn: string, bio: string,
    dateDied?: string
  ){
    
    const authorData = this.fillAnAuthorObject(fName, lName, profilePicUrl, dateBorn, bio, dateDied);
    
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

  getAllAuthors(){
    return this.http.get(this.DATABASE_URL)
      .pipe( map((res: any) => {
        const allAuthors = [];
        for(let key in res){
          allAuthors.push({...res[key], id: key});
        }
        return allAuthors;
      }))
  }

  getAuthorById(id: string){
    return this.getAllAuthors().pipe(map((res: Author[]) => {
      this.allAuthors = res;
      let author = new Author();
      for(let a of this.allAuthors){
        if(a.id == id){
          author = a;
          break;
        }
      }
      return author;
    }))
  }

  private fillAnAuthorObject(fName: string, lName: string,
    profilePicUrl: string, dateBorn: string, bio: string,
    dateDied?: string): Author{
      let author = new Author();

      author.fName = fName;
      author.lName = lName;
      author.profilePicUrl = profilePicUrl;
      author.dateBorn = new Date(dateBorn);
      author.bio = bio;

      return author;
  }
}
