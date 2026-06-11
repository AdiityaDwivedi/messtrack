package com.aditya.messtrack.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table (name = "announcements")
@Getter
@Setter
public class Announcement {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String message;

    private String collegeName;

    private String hostelName;

    private LocalDate createdDate;
}
