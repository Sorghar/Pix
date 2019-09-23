import { AlbumState, initialState } from './state';
import { AlbumActions, AlbumActionTypes } from './actions';

export function albumReducer(state = initialState, action: AlbumActions): AlbumState {
  switch (action.type) {
    case AlbumActionTypes.LoadAlbumsSuccess:
      return {
        ...state,
        albumList: action.payload
      };

    default:
      return state;
  }
}
