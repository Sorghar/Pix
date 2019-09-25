import { Actions, Effect, ofType } from '@ngrx/effects';
import { PhotosService } from 'src/app/core/services/photos.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, tap, mergeMap, catchError } from 'rxjs/operators';
import { PhotoActionTypes, LoadPhotos, LoadPhotosSuccess, UploadPhoto, UploadPhotoFailure, UploadPhotoSuccess } from './actions';
import { Photo } from 'src/app/core/models/photo';
import { Router } from '@angular/router';

@Injectable()
export class PhotoEffects {
    constructor(
        private actions$: Actions,
        private photosService: PhotosService,
        private router: Router
    ) { }

      @Effect()
      loadPhotos$: Observable<Action> = this.actions$.pipe(
        ofType(PhotoActionTypes.LoadAction),
        switchMap((action: LoadPhotos) => this.photosService.getAlbumPhotos(action.payload).pipe(
          map(photos => (new LoadPhotosSuccess(photos)))
        ))
      );

      @Effect()
      putPhotos$: Observable<Action> = this.actions$.pipe(
        ofType(PhotoActionTypes.UploadPhoto),
        mergeMap((action: UploadPhoto) => this.photosService.postPhoto(action.payload, 1234).pipe(
          catchError((err) => of(new UploadPhotoFailure(err))),
          tap((photo: Photo) => this.router.navigateByUrl(this.router.url.replace('new', photo.id.toString()))),
          map((photo: Photo) => new UploadPhotoSuccess(photo))
        ))
      );

  }
