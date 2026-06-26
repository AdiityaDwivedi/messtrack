package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.CollegeDTO;
import com.aditya.messtrack.service.CollegeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/colleges")
@RequiredArgsConstructor
public class CollegeController {

    private final CollegeService collegeService;

    @GetMapping
    public List<CollegeDTO> getAllColleges() {
        return collegeService.getAllColleges();
    }
}