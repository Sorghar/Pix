import { Actions, Effect, ofType } from '@ngrx/effects';
import { AlbumsService } from 'src/app/core/services/albums.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { AlbumActionTypes } from 'src/app/core/state/actions';
import { LoadAlbumsSuccess } from './actions';

@Injectable()
export class AlbumEffects {
  constructor(
    private actions$: Actions,
    private albumsService: AlbumsService
  ) { }

  @Effect()
  loadAlbums$: Observable<Action> = this.actions$.pipe(
    ofType(AlbumActionTypes.LoadAlbums),
    switchMap(action => this.albumsService.getAll().pipe(
      map(albums => (new LoadAlbumsSuccess(albums)))
    ))
  );
}
