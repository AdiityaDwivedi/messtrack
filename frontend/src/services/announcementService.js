import api from "./api";

export const getLatestAnnouncements = (college, hostel) => {
    return api.get(`/announcement/latest/${college}/${hostel}`);
};

export const getAnnouncements = (college, hostel) => {
    return api.get(`/announcement/hostel/${college}/${hostel}`);
};

export const getAnnouncementById = (id) => {
    return api.get(`/announcement/id/${id}`);
};

export const createAnnouncement = (announcementData) => {
    return api.post("/announcement", announcementData);
};

export const updateAnnouncement = (id, announcementData) => {
    return api.put(`/announcement/id/${id}`, announcementData);
};

export const deleteAnnouncement = (id) => {
    return api.delete(`/announcement/id/${id}`);
};