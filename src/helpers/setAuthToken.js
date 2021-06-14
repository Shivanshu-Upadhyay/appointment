import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    window.location = "http://localhost:3000/";
  } else {
    delete axios.defaults.headers.common["Authorization"];
    window.location = "http://localhost:3000/";
  }
};
