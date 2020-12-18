import { ErrorRoutingModule } from './error-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [ErrorPageComponent, ErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
