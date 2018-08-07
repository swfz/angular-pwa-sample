import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IframeComponent} from './iframe/iframe.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
