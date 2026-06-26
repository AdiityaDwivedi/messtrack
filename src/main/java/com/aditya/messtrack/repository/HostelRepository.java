package com.aditya.messtrack.repository;

import com.aditya.messtrack.entity.Hostel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HostelRepository extends JpaRepository<Hostel, Long> {

    Optional<Hostel> findByName(String name);

    boolean existsByName(String name);

    List<Hostel> findByCollegeId(Long collegeId);
}