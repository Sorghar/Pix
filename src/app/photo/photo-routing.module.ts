import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
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
