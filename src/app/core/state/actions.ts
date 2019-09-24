import { Action } from '@ngrx/store';

export enum AlbumActionTypes {
  LoadAlbums = '[Albums] Load all albums',
  LoadAlbumsSuccess = '[Albums] Load all albums success',
  SetCurrentAlbumId = '[Albums] Set current album ID'
}

export class SetCurrentAlbumId implements Action {
  readonly type = AlbumActionTypes.SetCurrentAlbumId;
  constructor(public payload: number) { }
}
