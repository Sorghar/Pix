import { AlbumState, initialState } from './state';
import { AlbumActions } from './actions';
import { AlbumActionTypes } from 'src/app/core/state/actions';

export function albumReducer(state = initialState, action: AlbumActions): AlbumState {
  switch (action.type) {
    case AlbumActionTypes.LoadAlbumsSuccess:
      return {
        ...state,
        albumList: action.payload
      };
    case AlbumActionTypes.SetCurrentAlbumId:
      return {
        ...state,
        currentAlbumId: action.payload
      };
    default:
      return state;
  }
}
