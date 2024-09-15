package com.test.backend.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.test.backend.api.dto.BusDto;
import com.test.backend.api.dto.ClientDto;
import com.test.backend.api.dto.ReservationDto;
import com.test.backend.api.dto.TrajetDto;
import com.test.backend.service.impl.ReservationServiceImpl;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Collections;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.List;
import java.util.Optional;
import org.springframework.web.context.WebApplicationContext;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@RequiredArgsConstructor
class ReservationControllerTest {

    private final WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @MockBean
    private ReservationServiceImpl reservationService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    private ReservationDto dto;

    @BeforeEach
    void setUp() {
        objectMapper.registerModule(new JavaTimeModule());
        mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();

        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(null, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        dto = new ReservationDto(null, null, List.of(trajetDto1), clientDto, 0.0, 2, false, "");

    }

    @Test
    void createReservation_ShouldReturnCreatedStatusAndReservation_WhenSuccessful() throws Exception {

        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(null, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        dto = new ReservationDto(1L, null, List.of(trajetDto1), clientDto, 0.0, 2, false, "");

        when(reservationService.createReservation(any(ReservationDto.class)))
                .thenReturn(Optional.of(dto));

        mockMvc.perform(post("/reservations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value("1"));
    }

    @Test
    void createReservation_ShouldReturnInternalServerError_WhenCreationFails() throws Exception {

        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(null, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        dto = new ReservationDto(1L, null, List.of(trajetDto1), clientDto, 0.0, 2, false, "");

        when(reservationService.createReservation(any(ReservationDto.class)))
                .thenReturn(Optional.empty());


        mockMvc.perform(post("/reservations")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isInternalServerError());
    }

    @Test
    void updateReservation_ShouldReturnUpdatedReservation_WhenSuccessful() throws Exception {
        Long reservationId = 1L;
        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(null, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        dto = new ReservationDto(1L, LocalDateTime.now(), List.of(trajetDto1), clientDto, 0.0, 2, false, "");

        when(reservationService.updateReservation(reservationId, dto))
                .thenReturn(Optional.of(dto));

        mockMvc.perform(put("/reservations/{id}", reservationId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(dto)));
    }

    @Test
    void updateReservation_ShouldReturnBadRequest_WhenIdMismatch() throws Exception {

        Long reservationId = 1L;
        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(null, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        dto = new ReservationDto(2L, LocalDateTime.now(), List.of(trajetDto1), clientDto, 0.0, 2, false, "");

        mockMvc.perform(put("/reservations/{id}", reservationId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void getReservationById_ShouldReturnReservation_WhenExists() throws Exception {
        Long reservationId = 1L;
        BusDto busDto = new BusDto(1L, 200, 30, 5.0, LocalTime.now());
        TrajetDto trajetDto1 = new TrajetDto(null, 2, LocalDate.now(), 0.0, busDto);
        ClientDto clientDto = new ClientDto(1L, "Test", "test@gmail.com");
        dto = new ReservationDto(1L, LocalDateTime.now(), List.of(trajetDto1), clientDto, 0.0, 2, false, "");

        when(reservationService.getReservation(reservationId)).thenReturn(Optional.of(dto));

        mockMvc.perform(get("/reservations/{id}", reservationId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value("1"));
    }

    @Test
    void getReservationById_ShouldReturnNotFound_WhenReservationDoesNotExist() throws Exception {

        Long reservationId = 1L;
        when(reservationService.getReservation(reservationId)).thenReturn(Optional.empty());

        mockMvc.perform(get("/reservations/{id}", reservationId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @Test
    void getAllReservations_ShouldReturnReservationsList_WhenNotEmpty() throws Exception {

        when(reservationService.getReservationsByClientId(1L)).thenReturn(List.of(dto));

        mockMvc.perform(get("/reservations")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(List.of(dto))));
    }

    @Test
    void getAllReservations_ShouldReturnNoContent_WhenNoReservationsExist() throws Exception {
        when(reservationService.getReservationsByClientId(1L))
                .thenReturn(Collections.emptyList());

        mockMvc.perform(get("/reservations")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());
    }

    @Test
    void deleteReservation_ShouldReturnNoContent_WhenDeletedSuccessfully() throws Exception {
        Long reservationId = 1L;

        mockMvc.perform(delete("/reservations/{id}", reservationId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());
    }

    @Test
    void deleteReservation_ShouldReturnNotFound_WhenReservationDoesNotExist() throws Exception {
        Long reservationId = 1L;
        doThrow(new EmptyResultDataAccessException(1)).when(reservationService).deleteReservation(reservationId);

        mockMvc.perform(delete("/reservations/{id}", reservationId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @Test
    void deleteReservation_ShouldReturnInternalServerError_WhenExceptionOccurs() throws Exception {
        Long reservationId = 1L;
        doThrow(new RuntimeException()).when(reservationService).deleteReservation(reservationId);

        mockMvc.perform(delete("/reservations/{id}", reservationId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isInternalServerError());
    }
}
