import { Author } from "./author.model";
import { Genre } from "./genre.model";

export interface Book {
  id: string;
  author: Author;
  genre: Genre;
  allQuantity: number;
  numOfBorrowed: number;
  datePublished: Date;
  synopsis: string;
  pages: number;
  coverPicUrl: string;
}