import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCarPageComponent } from './pages/search-car-page/search-car-page.component';
import { SearchCarComponent } from './components/search-car/search-car.component';



@NgModule({
  declarations: [SearchCarPageComponent, SearchCarComponent],
  imports: [
    CommonModule
  ]
})
export class CarModule { }
