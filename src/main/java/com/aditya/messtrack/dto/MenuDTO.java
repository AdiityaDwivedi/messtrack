package com.aditya.messtrack.dto;

import lombok.Data;

@Data
public class MenuDTO {
    private String day;
    private String breakfast;
    private String lunch;
    private String snacks;
    private String dinner;

    private String collegeName;
    private String hostelName;
}
