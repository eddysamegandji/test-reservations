package com.test.backend.api.dto;

import java.time.LocalTime;

public record TrajetDto(Long id, Integer nbrPlaces, LocalTime departureTime, Double unitTrajetPrice, String busNumber) {
}
