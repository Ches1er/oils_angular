import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPickerComponent } from './images-picker/images-picker.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ImagesPickerComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [ImagesPickerComponent]
})
export class ImagesPickerModule { }
