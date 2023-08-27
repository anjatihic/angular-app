import { Loan } from "./loan.model";

export interface User{
  id: string;
  fName: string;
  lName: string;
  username: string;
  email: string;
  dateRegistered: Date;
  loans: Loan[];
  role: string;
}