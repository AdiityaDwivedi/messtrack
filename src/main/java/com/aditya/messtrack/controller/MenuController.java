package com.aditya.messtrack.controller;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.entity.Menu;
import com.aditya.messtrack.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class MenuController {
    @Autowired
    MenuRepository menuRepository;

    @PostMapping("/menu")
    public Menu addMenu(@RequestBody MenuDTO menuDTO) {
        Menu menu = new Menu();

        menu.setDay(menuDTO.getDay());
        menu.setBreakfast((menuDTO.getBreakfast()));
        menu.setLunch(menuDTO.getLunch());
        menu.setSnacks(menuDTO.getSnacks());
        menu.setDinner(menuDTO.getDinner());
        menu.setHostelName(menuDTO.getHostelName());
        menu.setCollegeName(menuDTO.getCollegeName());

        return menuRepository.save(menu);
    }

    @GetMapping("/menu")
    public List<Menu> getMenu() {

        return menuRepository.findAll();
    }

    @GetMapping("/menu/{id}")
    public Optional<Menu> getMenuById(@PathVariable Long id) {

        return menuRepository.findById(id);
    }

    @DeleteMapping("/menu/{id}")
    public String deleteMenu(@PathVariable Long id) {

        menuRepository.deleteById(id);

        return "Menu deleted successfully";
    }

    @PutMapping("/menu/{id}")
    public Menu updateMenu(@PathVariable Long id, @RequestBody MenuDTO menuDTO) {

        Menu menu = menuRepository.findById(id).get();

        menu.setDay(menuDTO.getDay());
        menu.setBreakfast((menuDTO.getBreakfast()));
        menu.setLunch(menuDTO.getLunch());
        menu.setSnacks(menuDTO.getSnacks());
        menu.setDinner(menuDTO.getDinner());
        menu.setHostelName(menuDTO.getHostelName());
        menu.setCollegeName(menuDTO.getCollegeName());

        return menuRepository.save(menu);
    }
}




















