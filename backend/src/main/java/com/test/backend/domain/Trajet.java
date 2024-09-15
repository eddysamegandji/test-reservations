package com.test.backend.domain;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Trajet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int nbrPlaces;

    private LocalDate dateDepart;

    private double trajetPrice;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "bus_id")
    private Bus bus;

}
