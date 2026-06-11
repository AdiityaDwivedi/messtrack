package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.AnnouncementDTO;
import com.aditya.messtrack.entity.Announcement;
import com.aditya.messtrack.repository.AnnouncementRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AnnouncementService {

    private final AnnouncementRepository announcementRepository;

    public AnnouncementService(
            AnnouncementRepository announcementRepository) {
        this.announcementRepository = announcementRepository;
    }

    public Announcement createAnnouncement(
            AnnouncementDTO dto) {

        Announcement announcement =  new Announcement();

        announcement.setTitle(dto.getTitle());
        announcement.setMessage(dto.getMessage());
        announcement.setCollegeName(dto.getCollegeName());
        announcement.setHostelName(dto.getHostelName());

        announcement.setCreatedDate(LocalDate.now());

        return announcementRepository
                .save(announcement);
    }

    public List<Announcement> getAllAnnouncements() {
        return announcementRepository.findAll();
    }

    public Announcement getAnnouncementById(Long id) {
        return announcementRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Announcement not found"));
    }

    public Announcement updateAnnouncement(
            Long id,
            AnnouncementDTO dto) {

        Announcement announcement =
                getAnnouncementById(id);

        announcement.setTitle(dto.getTitle());
        announcement.setMessage(dto.getMessage());
        announcement.setCollegeName(dto.getCollegeName());
        announcement.setHostelName(dto.getHostelName());

        return announcementRepository.save(announcement);
    }

    public void deleteAnnouncement(Long id) {

        Announcement announcement =
                getAnnouncementById(id);

        announcementRepository.delete(announcement);
    }

    public List<Announcement>
    getAnnouncementsByCollegeAndHostel(
            String collegeName,
            String hostelName) {

        return announcementRepository
                .findByCollegeNameAndHostelName(
                        collegeName,
                        hostelName
                );
    }


}