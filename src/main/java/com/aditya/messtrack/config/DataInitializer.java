package com.aditya.messtrack.config;

import com.aditya.messtrack.entity.College;
import com.aditya.messtrack.entity.Hostel;
import com.aditya.messtrack.entity.Role;
import com.aditya.messtrack.entity.User;
import com.aditya.messtrack.repository.CollegeRepository;
import com.aditya.messtrack.repository.HostelRepository;
import com.aditya.messtrack.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final CollegeRepository collegeRepository;
    private final HostelRepository hostelRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        List<String> colleges = List.of(
                "Bakhtiyarpur College of Engineering",
                "MIT Muzaffarpur",
                "NIT Patna",
                "IIT Patna",
                "BCE Bhagalpur",
                "Nalanda College of Engineering",
                "Darbhanga College of Engineering",
                "Muzaffarpur Institute of Technology",
                "Gaya College of Engineering",
                "Katihar Engineering College",
                "Purnea College of Engineering",
                "Government Engineering College Vaishali",
                "Government Engineering College Siwan",
                "Government Engineering College Jamui",
                "Government Engineering College Arwal"
        );

        colleges.forEach(this::addCollege);

        createSuperAdmin();
    }

    private void addCollege(String collegeName) {

        if (collegeRepository.existsByName(collegeName)) {
            return;
        }

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

        System.out.println("Added college: " + collegeName);
    }

    private void createSuperAdmin() {

        if (userRepository.existsByEmail("admin@messtrack.com")) {
            return;
        }

        College college = collegeRepository
                .findByName("Bakhtiyarpur College of Engineering")
                .orElseThrow();

        Hostel hostel = hostelRepository.findByCollegeId(college.getId())
                .stream()
                .filter(h -> h.getName().equals("Boys Hostel"))
                .findFirst()
                .orElseThrow();

        User admin = new User();
        admin.setName("System Administrator");
        admin.setEmail("admin@messtrack.com");
        admin.setPassword(passwordEncoder.encode("Admin@123"));
        admin.setRole(Role.SUPER_ADMIN);
        admin.setCollege(college);
        admin.setHostel(hostel);

        userRepository.save(admin);

        System.out.println("Default SUPER_ADMIN created.");
    }
}