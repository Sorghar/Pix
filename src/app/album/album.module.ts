import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { StoreModule } from '@ngrx/store';
import { albumReducer } from './state/reducer';
import { HttpClientModule } from '@angular/common/http';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [
    AlbumRoutingModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('albums', albumReducer)
  ]
})
export class AlbumModule { }
