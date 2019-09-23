import { Actions } from '@ngrx/effects';
import { AlbumsService } from 'src/app/core/services/albums.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumEffects {
    constructor(
        private actions$: Actions,
        private albumsService: AlbumsService
    ) {
    }
  }
