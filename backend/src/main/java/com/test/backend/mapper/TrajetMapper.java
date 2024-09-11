package com.test.backend.mapper;


import com.test.backend.api.dto.TrajetDto;
import com.test.backend.domain.Trajet;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import static org.mapstruct.MappingConstants.ComponentModel.SPRING;

@Mapper(componentModel = SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE, unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface TrajetMapper {

    @Mapping(target= "bus.busNumber", source = "busNumber")
    Trajet dtoToEntity(TrajetDto trajetDto);

    TrajetDto entityToDto(Trajet trajet);
}
