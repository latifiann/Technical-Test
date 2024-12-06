import axios from "axios";
import baseUrl from "./baseUrl";

const login = async(data) => {
  try {
    const res = (await axios.get(`${baseUrl}/login`)).data;
    if (res.email != data.email || res.password != data.password ) {
        return false
    }
    return res;
  } catch (error) {
    console.error(error);
  }
};

const logout = () => {
  try {
    localStorage.removeItem("isAuthenticated");
  } catch (error) {
    console.error(error);
  }
};

export default { login, logout };
