import { Book } from "./book.model";
import { User } from "./user.model";

export class Loan {
  id?: string;
  book: Book;
  userId: string;
  dateLoaned: Date;
  dueDate: Date;

  constructor(book: Book, userId: string){
    this.book = book;
    this.userId = userId;
    this.dateLoaned = new Date();
    this.dueDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
  }
}