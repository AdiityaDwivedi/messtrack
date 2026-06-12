package com.aditya.messtrack.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PollDTO {
    @NotBlank(message = "question cannot be empty")
    private String question;

    @NotBlank(message = "option1 is required")
    private String option1;

    @NotBlank(message = "option2 is required")
    private String option2;

    @NotBlank(message = "option3 is required")
    private String option3;

    @NotBlank(message = "college name cannot be empty")
    private String collegeName;

    @NotBlank(message = "hostel name cannot be empty")
    private String hostelName;

    @NotNull(message = "expiry date is required")
    private LocalDate expiryDate;
}
