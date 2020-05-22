import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [CheckboxComponentComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [CheckboxComponentComponent]
})
export class SharedModule { }
