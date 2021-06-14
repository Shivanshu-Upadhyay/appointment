import axios from "axios";

export default axios.create({
  baseURL: "https://physiomatica.herokuapp.com/",
  headers: {
    // Accept: "application/json",
    // "Content-Type": "application/json",
    // Authorization: 'Bearer ' + token // if you use token
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
