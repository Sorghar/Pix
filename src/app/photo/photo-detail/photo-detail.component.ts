import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PhotoState } from '../state/state';
import { Observable, Subscription } from 'rxjs';
import { Photo } from 'src/app/core/models/photo';
import { getCurrentPhoto } from '../state/selectors';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { SetCurrentPhotoId } from '../state/actions';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit, OnDestroy {

  currentPhoto$: Observable<Photo>;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<PhotoState>
    ) { }

  ngOnInit() {
    this.currentPhoto$ = this.store.pipe(select(getCurrentPhoto));
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
  }
}
