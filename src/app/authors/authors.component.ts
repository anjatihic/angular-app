import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author.model';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit{

  allAuthors: Author[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe(res => {
      this.allAuthors = res;
    })
  }

}
