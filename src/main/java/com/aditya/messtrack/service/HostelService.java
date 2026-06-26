package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.HostelDTO;
import com.aditya.messtrack.entity.Hostel;
import com.aditya.messtrack.repository.HostelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HostelService {

    private final HostelRepository hostelRepository;

    public List<HostelDTO> getHostelsByCollege(Long collegeId) {

        return hostelRepository.findByCollegeId(collegeId)
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    private HostelDTO convertToDTO(Hostel hostel) {

        return new HostelDTO(
                hostel.getId(),
                hostel.getName()
        );
    }
}