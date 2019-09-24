import { Photo } from 'src/app/core/models/photo';
import { Action } from '@ngrx/store';

export enum PhotoActionTypes {
  LoadAction = '[Photo] Load',
  LoadActionSuccess = '[Photo] Load success',
  SetCurrentPhotoId = '[Photo] Set Current Photo Id'
}

export class LoadPhotos implements Action {
  readonly type = PhotoActionTypes.LoadAction;
  constructor(public payload: number) {}
}

export class LoadPhotosSuccess implements Action {
  readonly type = PhotoActionTypes.LoadActionSuccess;
  constructor(public payload: Photo[]) {}
}

export class SetCurrentPhotoId implements Action {
  readonly type = PhotoActionTypes.SetCurrentPhotoId;
  constructor(public payload: number) {}
}

export type PhotoActions =
  LoadPhotos |
  LoadPhotosSuccess |
  SetCurrentPhotoId;
