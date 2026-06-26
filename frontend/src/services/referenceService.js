import api from "./api";

export const getColleges = () => {
  return api.get("/colleges");
};

export const getHostels = (collegeId) => {
  return api.get(`/hostels?collegeId=${collegeId}`);
};