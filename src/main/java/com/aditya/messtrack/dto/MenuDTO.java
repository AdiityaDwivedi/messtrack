package com.aditya.messtrack.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class MenuDTO {
    @NotBlank(message = "Day cannot be empty")
    private String day;

    @NotBlank(message = "breakfast cannot be empty")
    private String breakfast;

    @NotBlank(message = "Lunch cannot be empty")
    private String lunch;

    private String snacks;

    @NotBlank(message = "Dinner cannot be empty")
    private String dinner;

    @NotBlank(message = "College name cannot be empty")
    private String collegeName;

    @NotBlank(message = "Hostel name cannot be empty")
    private String hostelName;
}
