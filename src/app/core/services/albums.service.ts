import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albums: Album[] = [
    { id: 1, userId: 1, title: 'Cute cats' },
    { id: 2, userId: 2, title: 'Cute dogs' },
    { id: 3, userId: 3, title: 'Landscapes' },
    ];

  constructor() { }

  getAll(): Observable<Album[]> {
    return of(this.albums);
  }
}
