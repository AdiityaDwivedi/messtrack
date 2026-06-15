package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.entity.Menu;
import com.aditya.messtrack.service.MenuService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class MenuController {
    @Autowired
    private MenuService menuService;

    @PostMapping("/menu")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public Menu createMenu(
            @Valid @RequestBody MenuDTO menuDTO) {

        return menuService.addMenu(menuDTO);
    }

    @GetMapping("/menu")
    public List<Menu> getMenu() {
        return menuService.getAllMenus();
    }

    @GetMapping("/menu/{id}")
    public Optional<Menu> getMenuById(@PathVariable Long id) {

        return menuService.getMenuById(id);
    }

    @DeleteMapping("/menu/{id}")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public void deleteMenu(@PathVariable Long id) {

        menuService.deleteMenu(id);
    }

    @PutMapping("/menu/{id}")
    @PreAuthorize("hasRole('HOSTEL_ADMIN') or hasRole('SUPER_ADMIN')")
    public Menu updateMenu(@Valid @PathVariable Long id, @RequestBody MenuDTO menuDTO) {

        return menuService.updateMenu(id, menuDTO);
    }

    @GetMapping("/menu/{college}/{hostel}")
    public List<Menu> getMenuByCollegeAndHostel(@PathVariable String college, @PathVariable String hostel) {
        return menuService.getMenuByCollegeAndHostel(college, hostel);
    }

    @GetMapping("/menu/today/{college}/{hostel}")
    public Menu getTodaysMenu(@PathVariable String college, @PathVariable String hostel) {
        return menuService.getTodaysMenu(college, hostel);
    }

    @GetMapping("/menu/tomorrow/{college}/{hostel}")
    public Menu getTomorrowsMenu(@PathVariable String college, @PathVariable String hostel) {

        return menuService.getTomorrowsMenu(college, hostel);
    }
}




















