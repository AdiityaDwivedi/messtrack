package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.entity.Menu;
import com.aditya.messtrack.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MenuService {

    @Autowired
    MenuRepository menuRepository;

    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    public Optional<Menu> getMenuById(Long id) {
        return menuRepository.findById(id);
    }

    public Menu addMenu(MenuDTO menuDTO) {
        if(menuRepository.existsByCollegeNameAndHostelNameAndDay(
                menuDTO.getCollegeName(),
                menuDTO.getHostelName(),
                menuDTO.getDay())) {

            throw new RuntimeException("Menu already exists");
        }
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

    public Menu updateMenu(Long id, MenuDTO menuDTO) {

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

    public String deleteMenu(Long id) {
        menuRepository.deleteById(id);

        return "Menu deleted by ID : " + id;
    }

    public List<Menu> getMenuByCollegeAndHostel(String college, String hostel) {
        return menuRepository.findByCollegeNameAndHostelName(college, hostel);
    }
}




















