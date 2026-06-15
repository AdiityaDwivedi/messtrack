package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.AnnouncementDTO;
import com.aditya.messtrack.entity.Announcement;
import com.aditya.messtrack.service.AnnouncementService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @PostMapping("/announcement")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public Announcement createAnnouncement(
            @Valid @RequestBody AnnouncementDTO dto) {

        return announcementService.createAnnouncement(dto);
    }

    @GetMapping("/announcement")
    public List<Announcement> getAllAnnouncements() {

        return announcementService.getAllAnnouncements();
    }

    @GetMapping("/announcement/id/{id}")
    public Announcement getAnnouncementById(
            @PathVariable Long id) {

        return announcementService.getAnnouncementById(id);
    }

    @PutMapping("/announcement/id/{id}")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public Announcement updateAnnouncement(
            @PathVariable Long id,
            @Valid @RequestBody AnnouncementDTO announcementDTO) {

        return announcementService.updateAnnouncement(id, announcementDTO);
    }

    @DeleteMapping("/announcement/id/{id}")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public String deleteAnnouncement(
            @PathVariable Long id) {

        announcementService.deleteAnnouncement(id);

        return "Announcement deleted successfully";
    }

    @GetMapping("/announcement/hostel/{college}/{hostel}")
    public List<Announcement> getAnnouncementsByCollegeAndHostel(
            @PathVariable String college,
            @PathVariable String hostel) {

        return announcementService.getAnnouncementsByCollegeAndHostel(
                college,
                hostel
        );
    }

    @GetMapping("/announcement/latest/{college}/{hostel}")
    public List<Announcement> getLatestAnnouncement(@PathVariable String college, @PathVariable String hostel) {
        return announcementService.getLatestAnnouncement(college, hostel);
    }
}













