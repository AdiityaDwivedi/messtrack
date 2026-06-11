package com.aditya.messtrack.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AnnouncementDTO {

    @NotBlank(message = "Title cannot be empty")
    private String title;

    @NotBlank(message = "Message cannot be empty")
    private String message;

    @NotBlank(message = "College name cannot be empty")
    private String collegeName;

    @NotBlank(message = "Hostel name cannot be empty")
    private String hostelName;
}