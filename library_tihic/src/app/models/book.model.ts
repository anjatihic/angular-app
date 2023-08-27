export class Book {
  id?: string;
  title: string;
  authorId: string;
  genreId: string;
  allQuantity: number;
  availableBooks: number;
  datePublished: Date;
  synopsis: string;
  pages: number;
  coverPicUrl: string;

  constructor(
    title: string,
    authorId: string,
    genreId: string,
    allQuantity: number,
    datePublished: string,
    synopsis: string,
    pages: number,
    coverPicUrl: string,
    id?: string
  ){
    this.title = title;
    this.authorId = authorId;
    this.genreId = genreId;
    this.allQuantity = allQuantity;
    this.datePublished = new Date(datePublished);
    this.synopsis = synopsis;
    this.pages = pages;
    this.coverPicUrl = coverPicUrl;

    this.availableBooks = allQuantity;

    id ? this.id = id : this.id = undefined;

  }
}