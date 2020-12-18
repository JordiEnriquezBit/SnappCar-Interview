import { SearchCarPageComponent } from './pages/search-car-page/search-car-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"search-car",component:SearchCarPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
