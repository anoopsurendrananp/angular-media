import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { GalleryRoutingModule } from './gallery-routing.module'

import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    GalleryRoutingModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
