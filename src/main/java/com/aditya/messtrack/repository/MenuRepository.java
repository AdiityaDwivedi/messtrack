package com.aditya.messtrack.repository;

import com.aditya.messtrack.entity.Menu;
import com.aditya.messtrack.enums.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

    List<Menu> findByCollegeNameAndHostelName(String collegeName, String hostelName);

    boolean existsByCollegeNameAndHostelNameAndDay(String collegeName, String hostelName, Day day);
}