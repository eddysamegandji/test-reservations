import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';


@NgModule({
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReservationsComponent,
    NgbModule,
  ],
  exports: [ReservationsComponent]
})
export class ReservationsModule { }
