package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.LoginDTO;
import com.aditya.messtrack.dto.UserDTO;
import com.aditya.messtrack.entity.User;
import com.aditya.messtrack.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.aditya.messtrack.dto.LoginResponseDTO;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/auth/register")
    public User registerUser(@Valid @RequestBody UserDTO userDTO) {

        return userService.register(userDTO);

    }

    @PostMapping("/auth/login")
    public LoginResponseDTO loginUser(@Valid @RequestBody LoginDTO loginDTO) {

        String token = userService.login(loginDTO);

        return new LoginResponseDTO(token);
    }

    @PutMapping("/admin/promote/{email}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public User makeHostelAdmin(
            @PathVariable String email) {

        return userService.makeHostelAdmin(email);
    }
}
