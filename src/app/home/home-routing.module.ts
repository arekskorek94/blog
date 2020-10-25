import { HomeContentComponent } from './home-content/home-content.component';
import { ProgrammingComponent } from './programming/programming.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes =
[
  { path: 'programming', component: ProgrammingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
