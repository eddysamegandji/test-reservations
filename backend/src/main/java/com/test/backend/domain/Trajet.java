package com.test.backend.domain;

import jakarta.persistence.*;
import java.time.LocalTime;
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

    private Integer nbrPlaces;

    private LocalTime departureTime;

    private Double unitTrajetPrice;

    @OneToOne
    private Bus bus;

}
