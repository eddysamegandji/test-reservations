import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { ReservationService } from 'src/app/shared/services/reservation.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationsComponent implements OnInit, OnDestroy{

  reservations!: Observable<Reservation[]>;
  destroy$: Subject<void> = new Subject();
  selectedReservation!: Reservation;
  selectedReservationId!: number;

  @ViewChild('confirmationModal')
  confirmationModal!: TemplateRef<any>

  constructor(
    private reservationService: ReservationService,
    private snackbarService: SnackbarService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations() {
    this.reservations = this.reservationService.getAllReservations();
  }

  selectReservation(reservation: Reservation) {
    this.selectedReservation = reservation;
    this.selectedReservationId = reservation.id;
  }

  redirectTo(direction: string) {
    if (direction === 'create') {
      this.router.navigate(['/reservations/new']);
    } else if (this.selectedReservationId) {
      this.router.navigate(['/reservations/update',this.selectedReservationId]);
    } else {
      this.snackbarService.showError("Choose the reservation to modify");
    }
  }

  protected confirmDelete(): void {
    if (this.selectedReservation) {
      this.modalService.open(this.confirmationModal).result.then(
        (result) => {
          if (result === 'Yes') {
            this.reservationService.deleteReservation(this.selectedReservationId)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: () => {
                this.snackbarService.showSuccess("Reservation deleted successfully id: " + this.selectedReservationId);
                window.location.reload();
              },
              error: () => this.snackbarService.showError("Error while deleting reservation id: " + this.selectedReservationId),
            });
          }
        },
        () => { window.location.reload();},
      );
    } else {
      this.snackbarService.showError("Please choose a reservation to delete");
    }
  }

  getTime(time: string): string {
    return time.split(':')[0] + ':' + time.split(':')[1];
  }

  updateReservation(reservation: Reservation) {
    reservation.isPaid = true;
    this.reservationService.updateReservation(reservation.id, reservation).pipe(takeUntil(this.destroy$))
    .subscribe({
        next: () => {
            this.snackbarService.showSuccess("Reservation paid successfully");
            this.router.navigateByUrl("reservations");
        },
        error: () => this.snackbarService.showError("Error while paying reservation id: " + reservation.id),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
