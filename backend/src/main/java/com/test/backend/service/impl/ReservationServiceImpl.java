package com.test.backend.service.impl;

import com.test.backend.api.dto.ReservationDto;
import com.test.backend.domain.Reservation;
import com.test.backend.mapper.ReservationMapper;
import com.test.backend.repository.ReservationRepository;
import com.test.backend.service.IReservationService;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements IReservationService {

    private final ReservationRepository reservationRepository;
    private final ReservationMapper reservationMapper;

    @Override
    public Optional<ReservationDto> createReservation(ReservationDto reservationDto) {
        Reservation reservation = reservationMapper.dtoToEntity(reservationDto);
        reservation.calculateReservationPrice();
        reservationRepository.save(reservation);
        return Optional.of(reservationMapper.entityToDto(reservation));
    }

    @Override
    public Optional<ReservationDto> updateReservation(Long id, ReservationDto reservationDto) {
        Reservation existingReservation = reservationRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Reservation not found."));

        Reservation updatedReservation = reservationMapper.dtoToEntity(reservationDto);

        existingReservation.setReservationDate(updatedReservation.getReservationDate());
        existingReservation.setTrajets(updatedReservation.getTrajets());
        existingReservation.setClient(updatedReservation.getClient());
        existingReservation.calculateReservationPrice();
        reservationRepository.save(existingReservation);
        return Optional.of(reservationMapper.entityToDto(existingReservation));

    }

    @Override
    public Optional<ReservationDto> getReservation(Long id) {
        return reservationRepository.findById(id).map(reservationMapper::entityToDto);
    }

    @Override
    public List<ReservationDto> getReservationsByClientId(Long clientId) {
        return reservationRepository.findAllByClient_Id(clientId)
                .stream()
                .map(reservationMapper::entityToDto)
                .toList();
    }

    @Override
    public void deleteReservation(Long id) {
        try {
            reservationRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new EmptyResultDataAccessException("Reservation not found", 1);
        }
    }
}
