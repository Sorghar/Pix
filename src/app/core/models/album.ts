export class Album {

  constructor(id: number, userId: number, title: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
  }

  id: number;
  userId: number;
  title: string;
}
