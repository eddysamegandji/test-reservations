package com.test.backend.mapper;

import com.test.backend.api.dto.ReservationDto;
import com.test.backend.domain.Reservation;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import static org.mapstruct.MappingConstants.ComponentModel.SPRING;

@Mapper(componentModel = SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE, unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface ReservationMapper {

    @Mapping(target = "trajets", source = "trajetDtos")
    @Mapping(target = "client", source = "clientDto")
    Reservation dtoToEntity(ReservationDto reservationDto);

    @InheritInverseConfiguration
    ReservationDto entityToDto(Reservation reservation);
}
