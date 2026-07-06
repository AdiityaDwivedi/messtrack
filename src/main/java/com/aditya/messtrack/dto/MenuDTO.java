package com.aditya.messtrack.dto;

import com.aditya.messtrack.enums.Day;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class MenuDTO {
    @NotNull(message = "Day cannot be empty")
    private Day day;

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
