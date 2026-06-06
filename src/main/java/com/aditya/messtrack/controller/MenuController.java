package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.entity.Menu;
import com.aditya.messtrack.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class MenuController {
    @Autowired
    private MenuService menuService;

    @PostMapping("/menu")
    public Menu addMenu(@RequestBody MenuDTO menuDTO) {

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
    public void deleteMenu(@PathVariable Long id) {

        menuService.deleteMenu(id);
    }

    @PutMapping("/menu/{id}")
    public Menu updateMenu(@PathVariable Long id, @RequestBody MenuDTO menuDTO) {

        return menuService.updateMenu(id, menuDTO);
    }

    @GetMapping("/menu/{college}/{hostel}")
    public List<Menu> getMenuByCollegeAndHostel(@PathVariable String college, @PathVariable String hostel) {
        return menuService.getMenuByCollegeAndHostel(college, hostel);
    }
}




















