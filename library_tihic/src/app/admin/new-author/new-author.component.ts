import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  onSubmit() {
    
  }

}
