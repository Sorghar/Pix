import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new',
        component: NewPhotoComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: PhotoDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
