package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuController {

    @Autowired
    MenuService menuService;

    @GetMapping("/menu")
    public List<MenuDTO> messMenu() {
        return menuService.getMenu();
    }
}