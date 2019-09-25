import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { photoReducer } from './state/reducer';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';
import { HttpClientModule} from '@angular/common/http';
import { PhotoRoutingModule } from './photo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotoDetailComponent, PhotoListComponent, NewPhotoComponent],
  imports: [
    PhotoRoutingModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('photos', photoReducer),
    ReactiveFormsModule
  ]
})
export class PhotoModule { }
