export class Genre {
  id?: string;
  name: string;
  about: string;


  constructor(name: string, about: string, id?: string){
    this.name = name;
    this.about = about;

    id ? this.id = id : this.id = undefined;
  }
}