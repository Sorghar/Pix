import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/core/models/album';
import { Observable, Subject } from 'rxjs';
import { AlbumState } from '../state/state';
import { Store, select } from '@ngrx/store';
import { LoadAlbums } from '../state/actions';
import { getAllAlbums } from '../state/selectors';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums$: Observable<Album[]>;
  currentAlbumSubject = new Subject<Album>();
  currentAlbum$ = this.currentAlbumSubject.asObservable();

  constructor(private store: Store<AlbumState>) { }

  ngOnInit() {
    this.albums$ = this.store.pipe(select(getAllAlbums));
    this.store.dispatch(new LoadAlbums());
  }

  selectAlbum(album: Album) {
    this.currentAlbumSubject.next(album);
  }
}
