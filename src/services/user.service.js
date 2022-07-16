import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/test/';
const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};
const getUserBoard = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() }); //CONFORMITY CHECK: confirm which page/endpoint this should actually point to and confirm method is correctly named/passed into userService object below.
};

const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', { headers: authHeader() }); //CONFORMITY CHECK: confirm which page/endpoint this should actually point to and confirm method is correctly named/passed into userService object below.
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() }); //CONFORMITY CHECK: confirm which page/endpoint this should actually point to and confirm method is correctly named/passed into userService object below.
};

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService;
