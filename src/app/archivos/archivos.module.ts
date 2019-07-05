import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArchivosPage } from './archivos.page';
import { ArchivosResolver } from './archivos.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArchivosPage,
    resolve: {
      data: ArchivosResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArchivosPage],
  providers: [
    ArchivosResolver
  ]
})
export class ArchivosPageModule {}
