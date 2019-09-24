import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PhotoState } from './state';

const getPhotosFeatureState = createFeatureSelector<PhotoState>('photos');

export const getCurrentAlbumPhotos = createSelector(getPhotosFeatureState, (state) => state.currentAlbumPhotos);
export const getCurrentPhoto = createSelector(
  getPhotosFeatureState,
  (state) => state.currentAlbumPhotos.find(p => p.id === state.currentPhotoId)
);
