import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AlbumState } from './state';

const getAlbumsFeatureState = createFeatureSelector<AlbumState>('albums');

export const getAllAlbums = createSelector(getAlbumsFeatureState, (state) => state.albumList);
