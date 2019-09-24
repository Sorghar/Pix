import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoState } from '../state/state';
import { Store } from '@ngrx/store';
import { LoadPhoto } from '../state/actions';
import { Photo } from 'src/app/core/models/photo';
import { Observable } from 'rxjs';
import { getCurrentAlbumPhotos } from '../state/selectors';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos$: Observable<Photo[]>;

  constructor(private route: ActivatedRoute,
              private store: Store<PhotoState>) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new LoadPhoto(id));
    this.photos$ = this.store.select(getCurrentAlbumPhotos);
  }

}
