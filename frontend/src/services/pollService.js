import api from "./api";

export const getActivePolls = (college, hostel) => {
    return api.get(`/poll/active/${college}/${hostel}`);
};

export const getPolls = (college, hostel) => {
    return api.get(`/poll/hostel/${college}/${hostel}`);
};

export const getPollById = (id) => {
    return api.get(`/poll/${id}`);
};

export const createPoll = (pollData) => {
    return api.post("/poll", pollData);
};

export const vote = (pollId, option) => {
    return api.post(`/poll/${pollId}/vote/${option}`);
};

export const getPollResult = (id) => {
    return api.get(`/poll/${id}/result`);
};

export const deletePoll = (id) => {
    return api.delete(`/poll/${id}`);
};