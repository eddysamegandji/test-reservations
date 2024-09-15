package com.test.backend.service.impl;

import com.test.backend.api.dto.ReservationDto;
import com.test.backend.domain.Bill;
import com.test.backend.domain.Reservation;
import com.test.backend.domain.Trajet;
import com.test.backend.enums.PaymentMethodEnum;
import com.test.backend.mapper.ReservationMapper;
import com.test.backend.repository.ReservationRepository;
import com.test.backend.service.IReservationService;
import jakarta.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.*;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements IReservationService {

    private final ReservationRepository reservationRepository;
    private final ReservationMapper reservationMapper;

    @Override
    @Transactional()
    public Optional<ReservationDto> createReservation(ReservationDto reservationDto) {
        if (reservationDto.id() != null)
            return Optional.empty();
        Reservation reservation = reservationMapper.dtoToEntity(reservationDto);
        reservation.setReservationDate(LocalDateTime.now());
        return saveAndConvertToDto(reservation);
    }

    @Override
    @Transactional()
    public Optional<ReservationDto> updateReservation(Long id, ReservationDto reservationDto) {
        Reservation existingReservation = reservationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Reservation with id: "+ id +" not found."));

        Reservation updatedReservation = reservationMapper.dtoToEntity(reservationDto);
        updatedReservation.setReservationDate(existingReservation.getReservationDate());
        return saveAndConvertToDto(updatedReservation);
    }

    private Optional<ReservationDto> saveAndConvertToDto(Reservation reservation) {
        calculateAndSetPrices(reservation);
        reservation = reservationRepository.save(reservation);
        return Optional.of(reservationMapper.entityToDto(reservation));
    }

    @Override
    public Optional<ReservationDto> getReservation(Long id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        return reservation.map(reservationMapper::entityToDto);
    }

    @Override
    public List<ReservationDto> getReservationsByClientId(Long clientId) {
        return reservationRepository.findAllByClient_Id(clientId)
                .stream()
                .map(reservationMapper::entityToDto)
                .toList();
    }

    @Override
    @Transactional()
    public void deleteReservation(Long id) {
        try {
            reservationRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new EmptyResultDataAccessException("Reservation not found", 1);
        }
    }

    public void calculateAndSetPrices(Reservation reservation) {
        reservation.getTrajets().forEach(trajet -> {
            double price = trajet.getNbrPlaces() * trajet.getBus().getUnitTrajetPrice();
            if (price > 100) {
                price = price * 0.95;
            }
            trajet.setTrajetPrice(price);
        });

        double totalPrice = reservation.getTrajets().stream().mapToDouble(Trajet::getTrajetPrice).sum();
        reservation.setReservationPrice(totalPrice);
        reservation.setNbBillets(reservation.getTrajets().stream().mapToInt(Trajet::getNbrPlaces).sum());

        payReservation(reservation);
    }

    private void payReservation(Reservation reservation) {
        if (reservation.isPaid()) {
            Bill bill = Bill.builder()
                    .paymentMethod(PaymentMethodEnum.CREDIT_CARD)
                    .reservation(reservation)
                    .build();
            reservation.setBill(bill);
        }
    }
}
