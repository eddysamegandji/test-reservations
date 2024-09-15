package com.test.backend.api.dto;

import java.time.LocalDate;

public record TrajetDto(Long id, Integer nbrPlaces, LocalDate dateDepart, double trajetPrice, BusDto bus) {
}
