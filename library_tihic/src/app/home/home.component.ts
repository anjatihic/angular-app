import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { LoanService } from '../services/loan.service';
import { Loan } from '../models/loan.model';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loggedInUser = new User();
  currentLoanedBooks:  Book[] = [];
  pastLoanedBooks: Book[] = [];
  
  constructor(private authService: AuthService, private loanService: LoanService) {}

  ngOnInit(): void {
    this.authService.loggedInUserSub.subscribe(user =>{
      this.loggedInUser = user;
    })

    this.loanService.getAllCurrentLoansByUser().subscribe(res => {
      if(res){
        for(let l of res){
          this.currentLoanedBooks.push(l.book);
        }
      }
    })

    this.loanService.getAllPastLoansByUser().subscribe(res => {
      if(res){
        for(let l of res){
          this.pastLoanedBooks.push(l.book);
        }
      }
    })
  }

}
