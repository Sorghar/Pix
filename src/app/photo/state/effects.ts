import { Actions } from '@ngrx/effects';
import { PhotosService } from 'src/app/core/services/photos.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoEffects {
    constructor(
        private actions$: Actions,
        private photosService: PhotosService
    ) {
    }
  }
