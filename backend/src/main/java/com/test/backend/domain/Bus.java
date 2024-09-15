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
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private Integer busNumber;

    private int capacity;

    private double unitTrajetPrice;

    private LocalTime time;

}
