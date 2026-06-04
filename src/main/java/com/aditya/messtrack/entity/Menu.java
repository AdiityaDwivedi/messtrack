package com.aditya.messtrack.entity;

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

    private String Monday;
    private String Tuesday;
    private String Wednesday;
    private String ThursDay;
    private String Friday;
    private String Saturday;
    private String Sunday;
}
