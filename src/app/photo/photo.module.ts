import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { photoReducer } from './state/reducer';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';
import { HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PhotoEffects } from './state/effects';

@NgModule({
  declarations: [PhotoDetailComponent, PhotoListComponent, NewPhotoComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('photos', photoReducer)
  ]
})
export class PhotoModule { }
