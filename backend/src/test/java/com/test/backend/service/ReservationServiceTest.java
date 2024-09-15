package com.test.backend.service;

import com.test.backend.api.dto.BusDto;
import com.test.backend.api.dto.ClientDto;
import com.test.backend.api.dto.ReservationDto;
import com.test.backend.api.dto.TrajetDto;
import com.test.backend.domain.Bus;
import com.test.backend.domain.Client;
import com.test.backend.domain.Reservation;
import com.test.backend.domain.Trajet;
import com.test.backend.mapper.ReservationMapper;
import com.test.backend.repository.ReservationRepository;
import com.test.backend.service.impl.ReservationServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.EmptyResultDataAccessException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ReservationServiceImplTest {

    @Mock
    private ReservationRepository reservationRepository;
    @Mock
    private ReservationMapper reservationMapper;

    private IReservationService reservationService;

    @BeforeEach
    void setUp() {
        reservationService = new ReservationServiceImpl(reservationRepository, reservationMapper);
    }

    @Test
    void createReservation_ShouldReturnReservationDto_WhenReservationIsCreated() {
        // given
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        ReservationDto dto = new ReservationDto(null, LocalDateTime.now(), Collections.emptyList(), clientDto, 0.0, 2, false, "");
        Reservation entity = new Reservation(null, LocalDateTime.now(), Collections.emptyList(), new Client(), 0.0, 2, false, null);

        // when
        when(reservationMapper.dtoToEntity(dto)).thenReturn(entity);
        when(reservationRepository.save(entity)).thenReturn(entity);
        when(reservationMapper.entityToDto(entity)).thenReturn(dto);

        Optional<ReservationDto> result = reservationService.createReservation(dto);

        // then
        assertTrue(result.isPresent());
        assertEquals(dto, result.get());
        verify(reservationRepository).save(entity);
    }

    @Test
    void updateReservation_ShouldThrowEntityNotFoundException_WhenReservationDoesNotExist() {
        // given
        Long reservationId = 1L;
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        ReservationDto dto = new ReservationDto(null, LocalDateTime.now(), Collections.emptyList(), clientDto, 0.0, 2, false, "");

        // when
        when(reservationRepository.findById(reservationId)).thenReturn(Optional.empty());

        // then
        assertThrows(EntityNotFoundException.class, () -> reservationService.updateReservation(reservationId, dto));
        verify(reservationRepository).findById(reservationId);
    }

    @Test
    void updateReservation_ShouldReturnUpdatedReservationDto_WhenReservationIsUpdated() {
        // given
        Long reservationId = 1L;
        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(1L, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        ReservationDto dto = new ReservationDto(null, LocalDateTime.now(), Collections.singletonList(trajetDto1), clientDto, 0.0, 2, false, "");

        Bus bus = new Bus(1L, 5050, 30, 40.0, LocalTime.now());
        Reservation existingReservation = new Reservation(null, LocalDateTime.now(), List.of(new Trajet(null, 2, LocalDate.now(), 80.0, bus)), new Client(), 80.0, 2, false, null);
        existingReservation.setReservationDate(LocalDateTime.now());
        Reservation updatedReservation = new Reservation(null, LocalDateTime.now(), List.of(new Trajet(null, 4, LocalDate.now(), 160.0, bus)), new Client(), 152.0, 4, true, null);

        // when
        when(reservationRepository.findById(reservationId)).thenReturn(Optional.of(existingReservation));
        when(reservationMapper.dtoToEntity(any(ReservationDto.class))).thenReturn(updatedReservation);
        when(reservationRepository.save(any(Reservation.class))).thenReturn(updatedReservation);
        when(reservationMapper.entityToDto(any(Reservation.class))).thenReturn(dto);

        Optional<ReservationDto> result = reservationService.updateReservation(reservationId, dto);

        // then
        assertTrue(result.isPresent());
        assertEquals(dto, result.get());
        verify(reservationRepository).findById(reservationId);
        verify(reservationRepository).save(any(Reservation.class));
    }

    @Test
    void getReservation_ShouldReturnReservationDto_WhenReservationExists() {
        // given
        Long reservationId = 1L;
        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(1L, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        ReservationDto dto = new ReservationDto(null, LocalDateTime.now(), Collections.singletonList(trajetDto1), clientDto, 0.0, 2, false, "");

        Bus bus = new Bus(1L, 5050, 30, 40.0, LocalTime.now());
        Reservation reservation = new Reservation(null, LocalDateTime.now(), List.of(new Trajet(null, 2, LocalDate.now(), 80.0, bus)), new Client(), 80.0, 2, false, null);

        // when
        when(reservationRepository.findById(reservationId)).thenReturn(Optional.of(reservation));
        when(reservationMapper.entityToDto(reservation)).thenReturn(dto);

        Optional<ReservationDto> result = reservationService.getReservation(reservationId);

        // then
        assertTrue(result.isPresent());
        assertEquals(dto, result.get());
        verify(reservationRepository).findById(reservationId);
    }

    @Test
    void getReservation_ShouldReturnEmptyOptional_WhenReservationDoesNotExist() {
        // given
        Long reservationId = 1L;

        // when
        when(reservationRepository.findById(reservationId)).thenReturn(Optional.empty());

        Optional<ReservationDto> result = reservationService.getReservation(reservationId);

        // then
        assertFalse(result.isPresent());
        verify(reservationRepository).findById(reservationId);
    }

    @Test
    void getReservationsByClientId_ShouldReturnEmptyList_WhenThereIsNoReservationForThisClient() {
        // given
        List<ReservationDto> emptyList = Collections.emptyList();

        // when
        when(reservationService.getReservationsByClientId(1L)).thenReturn(emptyList);

        List<ReservationDto> result = reservationService.getReservationsByClientId(1L);

        // then
        assertTrue(result.isEmpty());
        verify(reservationRepository).findAllByClient_Id(1L);
    }

    @Test
    void getReservationsByClientId_ShouldReturnReservations_WhenReservationsExistsForThisClient() {
        // given
        List<Reservation> reservations = new ArrayList<>();
        reservations.add(Reservation.builder().build());
        reservations.add(Reservation.builder().build());

        // when
        when(reservationRepository.findAllByClient_Id(1L)).thenReturn(reservations);

        List<ReservationDto> result = reservationService.getReservationsByClientId(1L);

        // then
        assertFalse(result.isEmpty());
        verify(reservationRepository).findAllByClient_Id(1L);
    }

    @Test
    void deleteReservation_ShouldDeleteReservation_WhenReservationExists() {
        // given
        Long reservationId = 1L;

        // when
        reservationService.deleteReservation(reservationId);

        // then
        verify(reservationRepository).deleteById(reservationId);
    }

    @Test
    void deleteReservation_ShouldThrowEmptyResultDataAccessException_WhenReservationDoesNotExist() {
        // given
        Long reservationId = 1L;

        // when
        doThrow(new EmptyResultDataAccessException(1)).when(reservationRepository).deleteById(reservationId);

        // then
        assertThrows(EmptyResultDataAccessException.class, () -> reservationService.deleteReservation(reservationId));
        verify(reservationRepository).deleteById(reservationId);
    }


}
