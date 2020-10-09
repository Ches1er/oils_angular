import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginationComponent } from './pagination/pagination/pagination.component';

@NgModule({
  declarations: [CheckboxComponentComponent, PaginationComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CheckboxComponentComponent]
})
export class SharedModule { }
