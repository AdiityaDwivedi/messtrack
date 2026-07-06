package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.*;
import com.aditya.messtrack.entity.College;
import com.aditya.messtrack.entity.Hostel;
import com.aditya.messtrack.entity.Role;
import com.aditya.messtrack.entity.User;
import com.aditya.messtrack.repository.CollegeRepository;
import com.aditya.messtrack.repository.HostelRepository;
import com.aditya.messtrack.repository.UserRepository;
import com.aditya.messtrack.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final CollegeRepository collegeRepository;
    private final HostelRepository hostelRepository;

    public User register(UserDTO userDTO) {

        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        College college = collegeRepository.findById(userDTO.getCollegeId())
                .orElseThrow(() -> new RuntimeException("College not found"));

        Hostel hostel = hostelRepository.findById(userDTO.getHostelId())
                .orElseThrow(() -> new RuntimeException("Hostel not found"));

        User user = new User();

        user.setRole(Role.STUDENT);
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setCollege(college);
        user.setHostel(hostel);

        return userRepository.save(user);
    }

    public LoginResponseDTO login(LoginDTO loginDTO) {

        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        UserResponseDTO userResponseDTO = new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole(),
                user.getCollege().getName(),
                user.getHostel().getName()
        );

        return new LoginResponseDTO(token, userResponseDTO);
    }

    public User makeHostelAdmin(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setRole(Role.HOSTEL_ADMIN);

        return userRepository.save(user);
    }

    public UserProfileDTO getCurrentUser(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new UserProfileDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole(),
                user.getCollege().getName(),
                user.getHostel().getName()
        );
    }
}