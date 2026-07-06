import api from "./api";

export const getTodaysMenu = (college, hostel) => {
    return api.get(`/menu/today/${college}/${hostel}`);
};

export const getTomorrowsMenu = (college, hostel) => {
    return api.get(`/menu/tomorrow/${college}/${hostel}`);
};

export const getMenus = (college, hostel) => {
    return api.get(`/menu/${college}/${hostel}`);
};

export const createMenu = (menuData) => {
    return api.post("/menu", menuData);
};

export const updateMenu = (id, menuData) => {
    return api.put(`/menu/${id}`, menuData);
};

export const deleteMenu = (id) => {
    return api.delete(`/menu/${id}`);
};