import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AlbumState } from './state';

const getAlbumsFeatureState = createFeatureSelector<AlbumState>('albums');

export const getAllAlbums = createSelector(getAlbumsFeatureState, (state) => state.albumList);
export const getCurrentAlbum = createSelector(getAlbumsFeatureState, (state) => state.albumList.find(a => a.id === state.currentAlbumId));
