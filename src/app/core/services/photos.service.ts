import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';
import { apiUrl, httpOptions } from '../constants';
import { map, tap, filter } from 'rxjs/operators';

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
      tap(console.log),
      map((res: any) => res.result),
      // map((a: Array<any>) => a.filter(i => (i.album_id === albumId.toString()))),
      map((res: Array<any>) => res.map(i => new Photo(i.id, i.title, i.thumbnail, i.url))),
      tap(console.log)
    );
  }
}
