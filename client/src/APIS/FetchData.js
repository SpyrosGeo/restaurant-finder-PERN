import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.8.3:4000/api/v1/restaurants",
});
