import { Album } from 'src/app/core/models/album';
import * as fromRoot from '../../state/state';
import { User } from 'src/app/core/models/user';

export interface AlbumState {
  albumList: Album[];
  currentAlbumId: number;
  pageNumber: number;
  filteredUserId: number;
  userList: User[];
}

export const initialState: AlbumState = {
  albumList: [],
  currentAlbumId: 0,
  pageNumber: 0,
  filteredUserId: 0,
  userList: []
};

export interface State extends fromRoot.State {
  albums: AlbumState;
}
