import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {   ZAnatomyEuropeIdeasComponent } from './z-anatomy-europe-ideas/z-anatomy-europe-ideas.component';

const routes: Routes = [
	{ path: "z-anatomy-europe-ideas", component:     ZAnatomyEuropeIdeasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
