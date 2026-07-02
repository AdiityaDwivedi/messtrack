import api from "./api";

export const getLatestAnnouncements = (college, hostel) => {
    return api.get(`/announcement/latest/${college}/${hostel}`);
};

export const getAnnouncements = (college, hostel) => {
    return api.get(`/announcement/hostel/${college}/${hostel}`);
};