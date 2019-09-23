export class Photo {

  constructor(id: number, title: string, thumbnailUrl: string, url: string) {
    this.id = id;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.url = url;
  }

  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}
