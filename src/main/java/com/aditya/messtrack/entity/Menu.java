package com.aditya.messtrack.entity;

import com.aditya.messtrack.enums.Day;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Day day;
    private String breakfast;
    private String lunch;
    private String snacks;
    private String dinner;

    private String collegeName;
    private String hostelName;
}
