import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';

import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'gallery',
      component: GalleryComponent,
      data: { title: extract('Gallery') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class GalleryRoutingModule { }




