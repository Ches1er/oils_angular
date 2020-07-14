import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CheckboxComponentComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CheckboxComponentComponent]
})
export class SharedModule { }
