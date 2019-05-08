import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from "@angular/router";
import { AppComponent } from './app.component';
import { Balade67Component } from './balade67/balade67.component';
import { Balade68Component } from './balade68/balade68.component';
import { HomeComponent } from './home/home.component';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AddBaladeComponent } from './add-balade/add-balade.component';

const routes: Routes = [
  { path: 'balade68', component:Balade68Component, data: { animation: 'isLeft' } },
  { path: 'balade67', component:Balade67Component, data: { animation: 'isRight' } },
  { path: '', component:HomeComponent ,},
  { path: 'add-balade', component:AddBaladeComponent, data: { animation: 'isRight' } },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppRoutingModule { }
