package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.LoginDTO;
import com.aditya.messtrack.dto.UserDTO;
import com.aditya.messtrack.entity.Role;
import com.aditya.messtrack.entity.User;
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

    public User register(UserDTO userDTO) {
        if(userRepository.existsByEmail(userDTO.getEmail()))
            throw new RuntimeException("Email already exists");

        User user = new User();

        user.setRole(Role.STUDENT);

        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        user.setCollegeName(userDTO.getCollegeName());
        user.setHostelName(userDTO.getHostelName());

        return userRepository.save(user);
    }

    public String login(LoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if(!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        return jwtUtil.generateToken(user.getEmail());
    }
}
