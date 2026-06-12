package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.UserDTO;
import com.aditya.messtrack.entity.Role;
import com.aditya.messtrack.entity.User;
import com.aditya.messtrack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User register(UserDTO userDTO) {
        if(userRepository.existsByEmail(userDTO.getEmail()))
            throw new RuntimeException("Email already exists");

        User user = new User();

        user.setRole(Role.STUDENT);

        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());

        user.setCollegeName(userDTO.getCollegeName());
        user.setHostelName(userDTO.getHostelName());

        return userRepository.save(user);
    }
}
