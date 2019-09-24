import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { PhotoState } from '../state/state';
import { Store } from '@ngrx/store';
import { LoadPhotos } from '../state/actions';
import { Photo } from 'src/app/core/models/photo';
import { Observable, Subscription } from 'rxjs';
import { getCurrentAlbumPhotos } from '../state/selectors';
import { SetCurrentAlbumId } from 'src/app/core/state/actions';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos$: Observable<Photo[]>;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<PhotoState>) { }

  ngOnInit() {
    this.photos$ = this.store.select(getCurrentAlbumPhotos);
    this.dispatchActions();
    this.sub = this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        this.dispatchActions();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private dispatchActions() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SetCurrentAlbumId(id));
    this.store.dispatch(new LoadPhotos(id));
  }

}
