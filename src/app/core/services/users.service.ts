import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl, httpOptions } from '../constants';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlPostfix = 'users';
  constructor(private http: HttpClient) { }



  public getAll(): Observable<User> {
    return this.http.get(`${apiUrl}/${this.urlPostfix}`, httpOptions).pipe(
      map((res: any) => res.result),
      map((res: Array<any>) => res.map(i => new User(i.id, `${i.first_name} ${i.last_name}`))),
      tap(console.log)
    );
  }
}
