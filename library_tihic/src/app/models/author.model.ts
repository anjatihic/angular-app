export class Author {
  id?: string;
  fName: string;
  lName: string;
  profilePicUrl: string;
  dateBorn: Date;
  dateDied?: Date;
  bio: string;

  constructor(
    fName: string,
    lName: string,
    profilePicUrl: string,
    dateBorn: string,
    bio: string,
    id?: string) {
    this.fName = fName;
    this.lName = lName;
    this.profilePicUrl = profilePicUrl;
    this.dateBorn = new Date(dateBorn);
    this.bio = bio;
    id ? this.id = id : this.id = undefined;
  }
}