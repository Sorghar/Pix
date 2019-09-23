import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/core/services/albums.service';
import { PhotosService } from 'src/app/core/services/photos.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumService: AlbumsService,
              private photosService: PhotosService,
              private userService: UsersService) { }

  ngOnInit() {
  }


  test() {
    this.albumService.getAll().subscribe();
  }

  test2() {
    this.photosService.getAlbumPhotos(218).subscribe();
  }

  test3() {
    this.userService.getAll().subscribe();
  }

}
