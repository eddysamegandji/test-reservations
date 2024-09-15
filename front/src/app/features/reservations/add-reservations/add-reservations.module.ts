import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsFormRoutingModule } from './reservations-form-routing.module'; 
import { ReservationsFormComponent } from './reservations-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReservationsFormRoutingModule,
    ReservationsFormComponent,
  ],
  exports: [ReservationsFormComponent]
})
export class AddReservationsModule { }
