import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Photo } from 'src/app/core/models/photo';
import { PhotosService } from 'src/app/core/services/photos.service';
import { PhotoState } from '../state/state';
import { Store } from '@ngrx/store';
import { UploadPhoto } from '../state/actions';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.css']
})
export class NewPhotoComponent implements OnInit {

  private photoForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<PhotoState>) { }

  ngOnInit() {
    this.photoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      file: ['', Validators.required]
    });
  }

  onSubmit() {
    const photo = new Photo(
      -1,
      this.photoForm.get('title').value,
      this.photoForm.get('file').value,
      this.photoForm.get('file').value
    );
    this.store.dispatch(new UploadPhoto(photo));
  }

}
