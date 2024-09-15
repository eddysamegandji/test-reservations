import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { BusService } from "src/app/shared/services/bus.service";
import { Bus } from "src/app/shared/models/bus.model";
import { Subject, takeUntil } from "rxjs";
import { ReservationService } from "src/app/shared/services/reservation.service";
import { Reservation } from "src/app/shared/models/reservation.model";
import { SnackbarService } from "src/app/shared/components/snackbar/snackbar.service";
import { Trajet } from "src/app/shared/models/trajet.model";

@Component({
  selector: "app-reservations-form",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./reservations-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationsFormComponent implements OnInit, OnDestroy {
  reservationForm!: FormGroup;
  buses: Bus[] = [];
  reservationToEdit!: Reservation;
  isEditing = false;
  addOrEditTitle!: string;
  reservationId!: number;
  destroy$: Subject<void> = new Subject();


  constructor(
    private fb: FormBuilder,
    private busService: BusService,
    private reservationService: ReservationService,
    private snackbarService: SnackbarService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.initForm(undefined);
    this.reservationId = Number(this.route.snapshot.paramMap.get('reservationId'));
    this.addOrEditTitle = this.reservationId ? "Modification de la réservation" : "Création d'une réservation";
    if (this.reservationId) {
      this.isEditing = true;
      this.loadReservation();
    }
  }

  getBuses() {
    this.busService.getAllBuses().pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (buses: Bus[]) => {
          this.buses = buses;
          this.changeDetectorRef.detectChanges();
        },
        error: (error) => console.log("Error while fetching buses", error),
      });
  }

  loadReservation() {
    this.reservationService.getReservationById(this.reservationId).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (reservation: Reservation) => {
          this.reservationToEdit = reservation;
          this.initForm(this.reservationToEdit);
          this.setupTrajets(this.reservationToEdit.trajets);
          this.changeDetectorRef.detectChanges();
        },
        error: (error) => console.log("Error while getting reservation with id" + this.reservationId, error),
      });
  }

  initForm(reservation: Reservation | undefined) {

    this.reservationForm = this.fb.group({
      id: [reservation?.id ?? null],
      reservationDate: [''],
      client: this.fb.group({
        id: [1],
        name: [{ value: "userTest", disabled: true }, Validators.required],
        email: [{ value: "test@gmail.com", disabled: true },[Validators.required, Validators.email],],
      }),
      trajets: this.fb.array([], Validators.required)
    });

    this.getBuses();
  }

  get trajets() {
    return this.reservationForm.get("trajets") as FormArray;
  }

  setupTrajets(trajets: Trajet[] | undefined) {
    if (!trajets) {
      return;
    }
    trajets.forEach(trajet => this.addTrajet(trajet));
  }

  addTrajet(trajetConfig?: Trajet) {
    const trajetForm = this.fb.group({
      id: [trajetConfig?.id ?? null],
      nbrPlaces: [trajetConfig?.nbrPlaces, Validators.required],
      dateDepart: [trajetConfig?.dateDepart, Validators.required],
      bus:  [trajetConfig?.bus.id, Validators.required],
    });

    
    this.trajets.push(trajetForm);
  }

  deleteTrajet(index: number) {
    this.trajets.removeAt(index);
  }

  submit(isPaid: boolean) {
    if (this.reservationForm.valid) {
      const reservation: Reservation = {
        ...this.reservationForm?.value,
        isPaid: isPaid,
      };

      reservation.trajets = reservation.trajets.map((trajet : any) => {
        const matchedBus = this.buses.find((bus: { id: any }) => bus.id == trajet.bus);
        return matchedBus ? {...trajet, bus: matchedBus} : trajet;
      });

      console.log("reservation to save:", reservation);

      if (this.isEditing) {
        this.updateReservation(reservation);
      } else {
          this.createReservation(reservation);
      }
    } else {
      this.snackbarService.showError("Missing informations");
    }
  }

  private createReservation(reservation: Reservation) {
    this.reservationService.createReservation(reservation).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.snackbarService.showSuccess("Reservation created successfully");
          this.router.navigateByUrl("reservations");
        },
        error: () => this.snackbarService.showError("Error while creating reservation"),
      });
  }

  private updateReservation(reservation: Reservation) {
    this.reservationService.updateReservation(this.reservationId, reservation).pipe(takeUntil(this.destroy$))
    .subscribe({
        next: () => {
            this.snackbarService.showSuccess("Reservation updated successfully");
            this.router.navigateByUrl("reservations");
        },
        error: () => this.snackbarService.showError("Error while updating reservation id: " + this.reservationId),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
