import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Base64UploadComponent } from './base64-upload/base64-upload.component';

const routes: Routes = [
  //{path: '', redirectTo:'/first-page'},
  { path: 'home', component: Base64UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


