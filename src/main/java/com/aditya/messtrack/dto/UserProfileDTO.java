package com.aditya.messtrack.dto;

import com.aditya.messtrack.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserProfileDTO {

    private Long id;
    private String name;
    private String email;
    private Role role;
    private String college;
    private String hostel;
}