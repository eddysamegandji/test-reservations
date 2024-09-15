import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsFormComponent } from './reservations-form.component';

const routes: Routes = [{ path: '', component: ReservationsFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsFormRoutingModule { }
