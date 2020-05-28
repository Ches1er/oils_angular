import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerResponseComponent } from './server-response/server-response.component';

@NgModule({
  declarations: [ServerResponseComponent],
  imports: [
    CommonModule
  ],
  exports: [ServerResponseComponent]
})
export class ServerResponseModule { }
