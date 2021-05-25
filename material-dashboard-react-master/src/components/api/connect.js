import axios from 'axios';

export default axios.create({
  baseURL: process.env.NODE_ENV === "production" ? `https://matan-homework.herokuapp.com/` : `http://localhost:8000/`,
});