package com.test.backend.api.dto;

import java.time.LocalDateTime;
import java.util.List;

public record ReservationDto(Long id, LocalDateTime reservationDate, List<TrajetDto> trajets, ClientDto client,
                             double reservationPrice, int nbBillets, boolean isPaid, String paymentMethod) {
}
