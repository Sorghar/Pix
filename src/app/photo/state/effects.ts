import { Actions, Effect, ofType } from '@ngrx/effects';
import { PhotosService } from 'src/app/core/services/photos.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, tap } from 'rxjs/operators';
import { PhotoActionTypes, LoadPhotos, LoadPhotosSuccess } from './actions';

@Injectable()
export class PhotoEffects {
    constructor(
        private actions$: Actions,
        private photosService: PhotosService
    ) { }

      @Effect()
      loadPhotos$: Observable<Action> = this.actions$.pipe(
        ofType(PhotoActionTypes.LoadAction),
        switchMap((action: LoadPhotos) => this.photosService.getAlbumPhotos(action.payload).pipe(
          map(photos => (new LoadPhotosSuccess(photos)))
        ))
      );

  }
