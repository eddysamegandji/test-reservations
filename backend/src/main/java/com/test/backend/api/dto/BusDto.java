package com.test.backend.api.dto;

import java.time.LocalTime;

public record BusDto (Long id, Integer busNumber, int capacity, double unitTrajetPrice, LocalTime time) {}
