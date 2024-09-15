import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations.component';
import { ReservationsFormComponent } from '../reservations-form/reservations-form.component'


const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
  { path: '', component: ReservationsComponent },
  { path: 'new', component: ReservationsFormComponent },
  { path: 'update/:reservationId', component: ReservationsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
