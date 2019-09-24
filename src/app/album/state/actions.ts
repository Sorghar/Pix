import { Action } from '@ngrx/store';
import { Album } from 'src/app/core/models/album';


export enum AlbumActionTypes {
  LoadAlbums = '[Albums] Load all albums',
  LoadAlbumsSuccess = '[Albums] Load all albums success',
  SetCurrentAlbumId = '[Albums] Set current album ID'
}

export class LoadAlbums implements Action {
  readonly type = AlbumActionTypes.LoadAlbums;
}

export class LoadAlbumsSuccess implements Action {
  readonly type = AlbumActionTypes.LoadAlbumsSuccess;
  constructor(public payload: Album[]) { }
}

export class SetCurrentAlbumId implements Action {
  readonly type = AlbumActionTypes.SetCurrentAlbumId;
  constructor(public payload: number) { }
}

export type AlbumActions =
LoadAlbums |
LoadAlbumsSuccess |
SetCurrentAlbumId;
