import api from "./api";

export const getActivePolls = (college, hostel) => {
    return api.get(`/poll/active/${college}/${hostel}`);
};

export const vote = (pollId, option) => {
    return api.post(`/poll/${pollId}/vote/${option}`);
};