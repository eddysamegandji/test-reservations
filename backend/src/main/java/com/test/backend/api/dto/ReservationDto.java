package com.test.backend.api.dto;

import java.time.LocalDate;
import java.util.List;

public record ReservationDto(Long id, LocalDate reservationDate, List<TrajetDto> trajetDtos, ClientDto clientDto, Double reservationPrice) {
}
