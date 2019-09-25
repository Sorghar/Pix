import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';
import { apiUrl, httpOptions } from '../constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  urlPostfix = 'photos';

  constructor(private http: HttpClient) { }

  public getAlbumPhotos(albumId: number): Observable<Photo[]> {
    const myHttpOptions = {
      ...httpOptions,
      params: { album_id: albumId.toString() }
    };
    return this.http.get(`${apiUrl}/${this.urlPostfix}`, myHttpOptions).pipe(
      map((res: any) => res.result),
      map((res: Array<any>) => res.slice(0, 8).map(i => new Photo(+i.id, i.title, i.thumbnail, i.url))),
    );
  }

  public postPhoto(photo: Photo, albumId: number): Observable<any> {
    const apiPhoto = {
      album_id: albumId,
      title: photo.title,
      url: photo.url,
      thumbnail: photo.url
    };
    return this.http.post(`${apiUrl}/${this.urlPostfix}`, apiPhoto, httpOptions).pipe(
      map((response: any) => {
        const result = response.result;
        return new Photo(+result.id, result.title, result.thumbnail, result.url);
      })
    );
  }
}
