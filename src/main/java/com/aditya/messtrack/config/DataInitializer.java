package com.aditya.messtrack.config;

import com.aditya.messtrack.entity.College;
import com.aditya.messtrack.entity.Hostel;
import com.aditya.messtrack.repository.CollegeRepository;
import com.aditya.messtrack.repository.HostelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final CollegeRepository collegeRepository;
    private final HostelRepository hostelRepository;

    @Override
    public void run(String... args) {

        if (collegeRepository.count() == 0) {

            addCollege("Bakhtiyarpur College of Engineering");
            addCollege("MIT Muzaffarpur");
            addCollege("NIT Patna");
            addCollege("IIT Patna");
            addCollege("BCE Bhagalpur");
            addCollege("Nalanda College of Engineering");
            addCollege("Darbhanga College of Engineering");
            addCollege("Muzaffarpur Institute of Technology");
            addCollege("Gaya College of Engineering");
            addCollege("Katihar Engineering College");
            addCollege("Purnea College of Engineering");
            addCollege("Government Engineering College Vaishali");
            addCollege("Government Engineering College Siwan");
            addCollege("Government Engineering College Jamui");
            addCollege("Government Engineering College Arwal");

            System.out.println("Default colleges and hostels inserted.");
        }
    }

    private void addCollege(String collegeName) {

        College college = new College();
        college.setName(collegeName);
        collegeRepository.save(college);

        Hostel boys = new Hostel();
        boys.setName("Boys Hostel");
        boys.setCollege(college);
        hostelRepository.save(boys);

        Hostel girls = new Hostel();
        girls.setName("Girls Hostel");
        girls.setCollege(college);
        hostelRepository.save(girls);
    }
}