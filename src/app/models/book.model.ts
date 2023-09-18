export class Book {
  id?: string;
  title: string;
  authorId: string;
  genreId: string;
  datePublished: Date;
  synopsis: string;
  pages: number;
  coverPicUrl: string;

  constructor(){
    this.title = '';
    this.authorId = '';
    this.genreId = '';
    this.datePublished = new Date();
    this.synopsis = '';
    this.pages = 0;
    this.coverPicUrl = '';

  }
}