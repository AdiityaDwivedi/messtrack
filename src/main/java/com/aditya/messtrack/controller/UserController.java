package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.LoginDTO;
import com.aditya.messtrack.dto.LoginResponseDTO;
import com.aditya.messtrack.dto.UserDTO;
import com.aditya.messtrack.dto.UserProfileDTO;
import com.aditya.messtrack.entity.User;
import com.aditya.messtrack.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/auth/register")
    public User registerUser(@Valid @RequestBody UserDTO userDTO) {
        return userService.register(userDTO);
    }

    @PostMapping("/auth/login")
    public LoginResponseDTO loginUser(@Valid @RequestBody LoginDTO loginDTO) {
        return userService.login(loginDTO);
    }

    @PutMapping("/admin/promote/{email}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public User makeHostelAdmin(@PathVariable String email) {
        return userService.makeHostelAdmin(email);
    }

    @GetMapping("/users/me")
    public UserProfileDTO getCurrentUser(Authentication authentication) {

        return userService.getCurrentUser(authentication.getName());

    }
}