package com.test.backend.service.impl;

import com.test.backend.api.dto.BusDto;
import com.test.backend.repository.BusRepository;
import com.test.backend.service.IBusService;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BusServiceImpl implements IBusService {

    private final BusRepository busRepository;

    @Override
    public Optional<BusDto> createBus(BusDto busDto) {
        return Optional.empty();
    }

    @Override
    public Optional<BusDto> updateBus(Long id, BusDto busDto) {
        return Optional.empty();
    }

    @Override
    public Optional<BusDto> getBusById(Long id) {
        return Optional.empty();
    }

    @Override
    public Optional<BusDto> getBusByBusNumber(String busNumber) {
        return Optional.empty();
    }

    @Override
    public List<BusDto> getAllBuses() {
        return List.of();
    }

    @Override
    public void deleteBus(Long id) {

    }
}
