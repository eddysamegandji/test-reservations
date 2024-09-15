package com.test.backend.mapper;

import com.test.backend.api.dto.ReservationDto;
import com.test.backend.domain.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import static org.mapstruct.MappingConstants.ComponentModel.SPRING;

@Mapper(componentModel = SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE, unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface ReservationMapper {

    @Mapping(source = "isPaid", target = "isPaid")
    Reservation dtoToEntity(ReservationDto reservationDto);

    @Mapping(source = "paid", target = "isPaid")
    @Mapping(source = "bill.paymentMethod", target = "paymentMethod")
    ReservationDto entityToDto(Reservation reservation);
}
