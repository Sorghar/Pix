import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlbumListComponent } from './album-list/album-list.component';
import { PhotoListComponent } from '../photo/photo-list/photo-list.component';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumListComponent,
    children: [
      {
        path: ':id',
        component: PhotoListComponent,
        children: [{path: 'photos', loadChildren: () => import('../photo/photo.module').then(x => x.PhotoModule)}]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
