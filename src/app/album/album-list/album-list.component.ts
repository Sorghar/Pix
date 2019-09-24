import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/core/models/album';
import { Observable, BehaviorSubject } from 'rxjs';
import { AlbumState } from '../state/state';
import { Store, select } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, switchMap, map, tap } from 'rxjs/operators';
import { isNull } from 'util';
import { LoadAlbums } from '../state/actions';
import { getAllAlbums, getCurrentAlbum } from '../state/selectors';
import { SetCurrentAlbumId } from 'src/app/core/state/actions';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  private albums$: Observable<Album[]>;
  private searchTerms = new BehaviorSubject<string>(null);
  filteredAlbums$: Observable<Album[]>;
  currentAlbum$: Observable<Album>;

  constructor(
    private store: Store<AlbumState>) { }

  ngOnInit() {
    this.albums$ = this.store.pipe(select(getAllAlbums));
    this.currentAlbum$ = this.store.pipe(select(getCurrentAlbum));
    this.store.dispatch(new LoadAlbums());

    this.filteredAlbums$ = this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore new term if same as previous term
      switchMap((term: string) => this.albums$.pipe(
        map(albums => term === '' || isNull(term) ?
          albums :
          albums.filter(album => album.title.toLowerCase().includes(term.toLowerCase())))
      )));
  }

  search(searchTerm: string) {
    this.searchTerms.next(searchTerm);
  }
}
