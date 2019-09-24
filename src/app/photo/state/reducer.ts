import { PhotoState, initialState } from './state';
import { PhotoActions, PhotoActionTypes } from './actions';

export function photoReducer(state = initialState, action: PhotoActions): PhotoState {
  switch (action.type) {
    case PhotoActionTypes.LoadActionSuccess:
      return { ...state, currentAlbumPhotos: action.payload };
    case PhotoActionTypes.SetCurrentPhotoId:
      return { ...state, currentPhotoId: action.payload };
    default:
      return state;
  }
}
