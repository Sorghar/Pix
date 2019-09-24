import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PhotoState } from '../state/state';
import { Observable, Subscription } from 'rxjs';
import { Photo } from 'src/app/core/models/photo';
import { getCurrentPhoto, getCurrentAlbumPhotos } from '../state/selectors';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { SetCurrentPhotoId } from '../state/actions';
import { map } from 'rxjs/operators';
import { getCurrentAlbum } from '../../album/state/selectors';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit, OnDestroy {

  currentPhoto$: Observable<Photo>;
  sub: Subscription;
  photoSub: Subscription;
  currentAlbumId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<PhotoState>
  ) { }

  ngOnInit() {
    this.currentPhoto$ = this.store.pipe(select(getCurrentPhoto));
    this.store.select(getCurrentAlbum).subscribe(x => this.currentAlbumId = x ? x.id : 0);
    this.dispatchAction();
    this.sub = this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        this.dispatchAction();
      }
    });
  }

  private dispatchAction() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SetCurrentPhotoId(id));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.photoSub.unsubscribe();
  }

  showPhoto(goNext: boolean) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photoSub = this.store.pipe(
      select(getCurrentAlbumPhotos),
      map(photos => {
        const photo = photos.find(p => p.id === id);
        const nextPhoto = photos.indexOf(photo) + (goNext ? 1 : -1);
        return photos[nextPhoto] ? photos[nextPhoto] : photo;
      }),
    ).subscribe(x => this.router.navigate(['albums', this.currentAlbumId, 'photos', x.id]));
  }


}
