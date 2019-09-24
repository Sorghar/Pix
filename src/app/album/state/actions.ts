import { Action } from '@ngrx/store';
import { Album } from 'src/app/core/models/album';
import { SetCurrentAlbumId, AlbumActionTypes } from 'src/app/core/state/actions';

export class LoadAlbums implements Action {
  readonly type = AlbumActionTypes.LoadAlbums;
}

export class LoadAlbumsSuccess implements Action {
  readonly type = AlbumActionTypes.LoadAlbumsSuccess;
  constructor(public payload: Album[]) { }
}

export type AlbumActions =
LoadAlbums |
LoadAlbumsSuccess |
SetCurrentAlbumId;
