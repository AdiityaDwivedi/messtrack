package com.aditya.messtrack.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "polls")
public class Poll {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    private String option1;
    private int option1Votes;

    private String option2;
    private int option2Votes;

    private String option3;
    private int option3Votes;

    private String collegeName;
    private String hostelName;

    private LocalDate createdDate;
    private LocalDate expiryDate;
}













