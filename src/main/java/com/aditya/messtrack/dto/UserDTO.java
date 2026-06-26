package com.aditya.messtrack.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UserDTO {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email cannot be empty")
    private String email;

    @NotBlank(message = "Password cannot be empty")
    private String password;

    @NotNull(message = "College is required")
    private Long collegeId;

    @NotNull(message = "Hostel is required")
    private Long hostelId;
}