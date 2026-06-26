package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.CollegeDTO;
import com.aditya.messtrack.entity.College;
import com.aditya.messtrack.repository.CollegeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CollegeService {

    private final CollegeRepository collegeRepository;

    public List<CollegeDTO> getAllColleges() {

        return collegeRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    private CollegeDTO convertToDTO(College college) {

        return new CollegeDTO(
                college.getId(),
                college.getName()
        );
    }
}