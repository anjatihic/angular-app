import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Book } from '../models/book.model';
import { User } from '../models/user.model';
import { Loan } from '../models/loan.model';
import { map } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/loan.json";


  constructor(private http: HttpClient,
    private authService: AuthService) { }


  createNewLoan(book: Book){
    let userId = localStorage.getItem('user')!;

    let newLoan = new Loan(book, userId);

    this.http.post(this.DATABASE_URL, newLoan)
      .subscribe();
  }

  getAllLoans(){
    return this.http.get(this.DATABASE_URL)
      .pipe(map((res: any) => {
        const loans = [];
        for(let key in res){
          loans.push({...res[key], id: key});
        }
        return loans;
      }))
  }

  getAllCurrentLoansByUser(){
    let userId = localStorage.getItem('user');
    

    return this.getAllLoans().pipe(map((res: Loan[]) => {
      let currentLoans = [];
      for(let l of res){
        if(l.userId == userId && this.checkDate(l.dateLoaned, l.dueDate)){
          currentLoans.push(l);
        }
      }
      return currentLoans;
    }))
      
  }

  private checkDate(dateLoaned: Date, dueDate: Date): boolean{
    let currentDate = formatDate(new Date(), 'yyyy-MM-dd','en_US');
    let date1 = formatDate(new Date(dateLoaned), 'yyyy-MM-dd','en_US');
    let date2 = formatDate(new Date(dueDate), 'yyyy-MM-dd','en_US');

    if((currentDate >= date1) && (currentDate < date2)){
      return true;
    }

    return false;
  }
}
