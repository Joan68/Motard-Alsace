import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from "@angular/router";
import { AppComponent } from './app.component';
import { Balade67Component } from './balade67/balade67.component';
import { Balade68Component } from './balade68/balade68.component';

const routes: Routes = [
  { path: 'balade68', component:Balade68Component },
  { path: 'balade67', component:Balade67Component },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
