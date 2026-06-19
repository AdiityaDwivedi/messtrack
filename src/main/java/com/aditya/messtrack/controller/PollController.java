package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.dto.PollDTO;
import com.aditya.messtrack.entity.Poll;
import com.aditya.messtrack.service.PollService;
import jakarta.validation.Valid;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PollController {
    @Autowired
    private PollService pollService;

    @PostMapping("/poll")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public Poll createPoll(@Valid @RequestBody PollDTO pollDTO) {

        return pollService.createPoll(pollDTO);
    }

    @GetMapping("/poll/{id}")
    public Poll getPollById( @PathVariable Long id) {

        return pollService.getPollById(id);
    }

    @GetMapping("/poll/hostel/{college}/{hostel}")
    public List<Poll> getPollsByCollegeAndHostel( @PathVariable String college,  @PathVariable String hostel) {

        return pollService.getPollsByCollegeAndHostel(
                college,
                hostel
        );
    }

    @PostMapping("/poll/{id}/vote/{option}")
    public Poll vote(@PathVariable Long id, @PathVariable int option, Authentication authentication) {

        return pollService.vote(id, option, authentication.getName());
    }

    @GetMapping("/poll/{id}/result")
    public Poll getPollResult( @PathVariable Long id) {

        return pollService.getPollById(id);
    }

    @DeleteMapping("poll/{id}")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public String deletePoll(@PathVariable Long id) {
        pollService.deletePollById(id);

        return "Poll deleted";
    }

    @GetMapping("/poll/active/{college}/{hostel}")
    public List<Poll> getActivePolls( @PathVariable String college,  @PathVariable String hostel
    ) {

        return pollService.getActivePolls(
                college,
                hostel
        );
    }
}
























