import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page.component';
import { HomeComponent } from './components/home.component';



@NgModule({
  declarations: [HomePageComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
