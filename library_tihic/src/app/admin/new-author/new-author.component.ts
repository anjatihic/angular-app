import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent {
  created: boolean = false;

  newAuthorForm = new FormGroup({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    picUrl: new FormControl('', Validators.required),
    dateBorn: new FormControl('', Validators.required),
    dateDied: new FormControl(''),
    bio: new FormControl('', Validators.required)
  })

  constructor(private authorService: AuthorService) {}

  onSubmit() {
    let fName = this.newAuthorForm.controls['fName'].value!;
    let lName = this.newAuthorForm.controls['lName'].value!;
    let picUrl = this.newAuthorForm.controls['picUrl'].value!;
    let dateBorn = this.newAuthorForm.controls['dateBorn'].value!;
    let bio = this.newAuthorForm.controls['bio'].value!;

    let dateDied = this.newAuthorForm.controls['dateDied'].value;

    this.newAuthorForm.reset();
    
    if(dateDied === undefined){
      this.authorService.createNewAuthor(fName, lName, picUrl, dateBorn, bio);
    }else{
      this.authorService.createNewAuthor(fName, lName, picUrl, dateBorn, bio, dateDied!);
    }
    this.created = true;
  }

}
