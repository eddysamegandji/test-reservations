package com.test.backend.repository;

import com.test.backend.domain.Bus;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepository extends JpaRepository<Bus, Long> {

    Optional<Bus> findByBusNumber(String busNumber);
}
