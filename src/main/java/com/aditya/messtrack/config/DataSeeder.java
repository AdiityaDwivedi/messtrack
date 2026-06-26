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
public class DataSeeder implements CommandLineRunner {

    private final CollegeRepository collegeRepository;
    private final HostelRepository hostelRepository;

    @Override
    public void run(String... args) {

        if (!collegeRepository.existsByName("Bakhtiyarpur College of Engineering")) {

            College college = new College();
            college.setName("Bakhtiyarpur College of Engineering");

            college = collegeRepository.save(college);

            createHostel("BH1", college);
            createHostel("BH2", college);
            createHostel("BH3", college);
            createHostel("GH1", college);
            createHostel("GH2", college);
        }
    }

    private void createHostel(String hostelName, College college) {

        if (!hostelRepository.existsByName(hostelName)) {

            Hostel hostel = new Hostel();

            hostel.setName(hostelName);
            hostel.setCollege(college);

            hostelRepository.save(hostel);
        }
    }
}