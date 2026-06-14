package com.aditya.messtrack.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginDTO {

    @Email(message = "Invalid Email")
    @NotBlank(message = "Enter cannot be empty")
    private String email;

    @NotBlank(message = "Password cannot be empty")
    private String password;
}
