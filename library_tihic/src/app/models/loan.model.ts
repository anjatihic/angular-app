import { Book } from "./book.model";
import { User } from "./user.model";

export interface Loan {
  id: string;
  book: Book;
  user: User;
  dateLoaned: Date;
  dueDate: Date;
}