import { Photo } from 'src/app/core/models/photo';
import { Action } from '@ngrx/store';

export enum PhotoActionTypes {
  LoadAction = '[Photo] Load',
  LoadActionSuccess = '[Photo] Load success',
  SetCurrentPhotoId = '[Photo] Set Current Photo Id',
  UploadPhoto = '[Photo] Upload photo',
  UploadPhotoSuccess = '[Photo] Upload photo success',
  UploadPhotoFailure = '[Photo] Upload photo failure'
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

export class UploadPhoto implements Action {
  readonly type = PhotoActionTypes.UploadPhoto;
  constructor(public payload: Photo) {}
}

export class UploadPhotoSuccess implements Action {
  readonly type = PhotoActionTypes.UploadPhotoSuccess;
  constructor(public payload: Photo) {}
}

export class UploadPhotoFailure implements Action {
  readonly type = PhotoActionTypes.UploadPhotoFailure;
  constructor(public payload: string) {}
}

export type PhotoActions =
  LoadPhotos |
  LoadPhotosSuccess |
  SetCurrentPhotoId |
  UploadPhoto |
  UploadPhotoSuccess |
  UploadPhotoFailure;
