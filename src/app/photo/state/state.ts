import { Photo } from 'src/app/core/models/photo';
import * as fromRoot from '../../state/state';

export interface PhotoState {
  currentPhotoId: number;
  currentAlbumPhotos: Photo[];
}

export const initialState: PhotoState = {
  currentPhotoId: 0,
  currentAlbumPhotos: []
};

export interface State extends fromRoot.State {
  photos: PhotoState;
}
