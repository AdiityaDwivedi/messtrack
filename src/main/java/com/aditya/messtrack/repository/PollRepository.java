package com.aditya.messtrack.repository;

import com.aditya.messtrack.entity.Poll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {

    List<Poll> findByCollegeNameAndHostelName(
            String collegeName,
            String hostelName
    );

    List<Poll> findByCollegeNameAndHostelNameAndExpiryDateGreaterThanEqual(
            String collegeName,
            String hostelName,
            LocalDate date
    );
}
