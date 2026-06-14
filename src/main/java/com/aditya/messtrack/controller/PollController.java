package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.dto.PollDTO;
import com.aditya.messtrack.entity.Poll;
import com.aditya.messtrack.service.PollService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PollController {
    @Autowired
    private PollService pollService;

    @PostMapping("/poll")
    @PreAuthorize(
            "hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')"
    )
    public Poll createPoll(
            @Valid @RequestBody PollDTO pollDTO) {

        return pollService.createPoll(pollDTO);
    }

    @GetMapping("/poll/{id}")
    public Poll getPollById(
            @PathVariable Long id) {

        return pollService.getPollById(id);
    }

    @GetMapping("/poll/hostel/{college}/{hostel}")
    public List<Poll> getPollsByCollegeAndHostel(
            @PathVariable String college,
            @PathVariable String hostel) {

        return pollService.getPollsByCollegeAndHostel(
                college,
                hostel
        );
    }

    @PostMapping("/poll/{id}/vote/{option}")
    public Poll vote(
            @PathVariable Long id,
            @PathVariable int option) {

        return pollService.vote(id, option);
    }

    @GetMapping("/poll/{id}/result")
    public Poll getPollResult(
            @PathVariable Long id) {

        return pollService.getPollById(id);
    }
}
























