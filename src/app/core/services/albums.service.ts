import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl, token, httpOptions } from '../constants';
import { Observable, of, EMPTY } from 'rxjs';
import { Album } from '../models/album';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  urlPostfix = 'albums';
  url = `${apiUrl}/${this.urlPostfix}`;

  constructor(private http: HttpClient) { }

   public getAll(): Observable<Album[]> {
    return this.http.get(this.url, httpOptions).pipe(
      map((res: any) =>  res.result),
      map((arr: Array<any>) => arr.map(i => (new Album(i.id, i.user_id, i.title)))),
    );
  }

}
