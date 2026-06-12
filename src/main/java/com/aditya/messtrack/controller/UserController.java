package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.UserDTO;
import com.aditya.messtrack.entity.User;
import com.aditya.messtrack.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/auth/register")
    public User registerUser(@Valid @RequestBody UserDTO userDTO) {

        return userService.register(userDTO);

    }

}
