package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.HostelDTO;
import com.aditya.messtrack.service.HostelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hostels")
@RequiredArgsConstructor
public class HostelController {

    private final HostelService hostelService;

    @GetMapping
    public List<HostelDTO> getHostelsByCollege(
            @RequestParam Long collegeId
    ) {
        return hostelService.getHostelsByCollege(collegeId);
    }
}