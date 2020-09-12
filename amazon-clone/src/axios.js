import axios from "axios";

const instance = axios.create({
  baseURL: "https://am-server.herokuapp.com", //Api URL cloud function url
});
export default instance;
