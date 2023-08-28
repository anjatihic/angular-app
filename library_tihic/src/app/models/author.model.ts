export class Author {
  id?: string;
  fName: string;
  lName: string;
  profilePicUrl: string;
  dateBorn: Date;
  dateDied?: Date;
  bio: string;

  constructor() {
    this.fName = '';
    this.lName = '';
    this.profilePicUrl = '';
    this.dateBorn = new Date();
    this.bio = '';
  }
}