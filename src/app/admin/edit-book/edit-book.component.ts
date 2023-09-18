import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/book.model';
import { Genre } from 'src/app/models/genre.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  @Input() editingBook: Book = new Book();

  allGenres: Genre[] = [];
  allAuthors: Author[] = [];

  created: boolean = false;

  newBookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    authorId: new FormControl ('', Validators.required),
    photoUrl: new FormControl('', Validators.required),
    syn: new FormControl('', Validators.required),
    genreId: new FormControl('', Validators.required),
    pages: new FormControl('', [Validators.required, Validators.min(1)]),
    datePublished: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)])
  })


  constructor(private formBuilder: FormBuilder) {
    this.newBookForm.controls.title.setValue(this.editingBook.title) // doesnt work
    console.log(this.editingBook.title)  // this is nothing?????
  }
  

  ngOnInit(): void {
    
  }

  onSubmit(){}
}
