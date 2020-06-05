import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Grid1Component } from './components/grid1/grid1.component';


const routes: Routes = [
  { path: 'grid1', component: Grid1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
