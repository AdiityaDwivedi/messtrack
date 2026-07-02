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