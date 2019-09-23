import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album/album-list/album-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full'}, // <- Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
