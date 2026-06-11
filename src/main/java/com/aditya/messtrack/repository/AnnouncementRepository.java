package com.aditya.messtrack.repository;

import com.aditya.messtrack.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepository
        extends JpaRepository<Announcement, Long> {

    List<Announcement> findByCollegeNameAndHostelName(
            String collegeName,
            String hostelName
    );
}