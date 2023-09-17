import { Loan } from "./loan.model";

export class User{
  id?: string;
  fName: string;
  lName: string;
  username: string;
  email: string;
  dateRegistered: Date;
  loans: Loan[];
  role: string;
  pass: string;

  constructor(){
    this.fName = '';
    this.lName = '';
    this.username = '';
    this.email = '';
    this.dateRegistered = new Date();
    this.loans = [];
    this.role = 'user';
    this.pass = '';

  }
}