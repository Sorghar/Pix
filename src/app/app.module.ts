import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AlbumModule } from './album/album.module';
import { PhotoModule } from './photo/photo.module';
import { CoreModule } from './core/core.module';
import { AlbumEffects } from './album/state/effects';
import { PhotoEffects } from './photo/state/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    NgbModule,
    AlbumModule,
    PhotoModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AlbumEffects, PhotoEffects]),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
