package com.aditya.messtrack.service;

import com.aditya.messtrack.dto.MenuDTO;
import com.aditya.messtrack.entity.Menu;
import com.aditya.messtrack.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MenuService {

    @Autowired
    MenuRepository menuRepository;

    public List<MenuDTO> getMenu() {
        List<com.aditya.messtrack.entity.Menu> menu = menuRepository.findAll();
        return menu.stream().map(m -> {
            MenuDTO dto = new MenuDTO();
            dto.setMonday(m.getMonday());
            dto.setTuesday(m.getTuesday());
            dto.setWednesday(m.getWednesday());
            dto.setThursDay(m.getThursDay());
            dto.setFriday(m.getFriday());
            dto.setSaturday(m.getSaturday());
            dto.setSunday(m.getSunday());
            return dto;
        }).collect(Collectors.toList());
    }
}