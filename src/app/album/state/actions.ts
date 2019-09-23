import { Action } from '@ngrx/store';
import { Album } from 'src/app/core/models/album';


export enum AlbumActionTypes {
  LoadAlbums = '[Albums] Load all albums',
  LoadAlbumsSuccess = '[Albums] Load all albums success'
}

export class LoadAlbums implements Action {
  readonly type = AlbumActionTypes.LoadAlbums;
}

export class LoadAlbumsSuccess implements Action {
  readonly type = AlbumActionTypes.LoadAlbumsSuccess;
  constructor(public payload: Album[]) { }
}

export type AlbumActions =
LoadAlbums |
LoadAlbumsSuccess;
