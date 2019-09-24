import { Photo } from 'src/app/core/models/photo';
import { Action } from '@ngrx/store';

export enum PhotoActionTypes {
  LoadAction = '[Photo] Load',
  LoadActionSuccess = '[Photo] Load success',
}

export class LoadPhoto implements Action {
  readonly type = PhotoActionTypes.LoadAction;
  constructor(public payload: number) {}
}

export class LoadPhotoSuccess implements Action {
  readonly type = PhotoActionTypes.LoadActionSuccess;
  constructor(public payload: Photo[]) {}
}

export type PhotoActions =
  LoadPhoto |
  LoadPhotoSuccess;
