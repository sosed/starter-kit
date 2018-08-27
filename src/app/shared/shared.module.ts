import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { LocalizedDatePipe } from '@app/shared/pipes/localized-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    LocalizedDatePipe
  ],
  exports: [
    LoaderComponent,
    LocalizedDatePipe
  ]
})
export class SharedModule { }
