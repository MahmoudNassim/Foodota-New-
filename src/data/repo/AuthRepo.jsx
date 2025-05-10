import { tokenCheck } from "../api/check_token";
import { loginUser } from "../api/loginUser";
import { LoginRest } from "../api/LoginRes";
import { storeUser } from "../api/store_user";

export const AuthRepo = {
  register: async (values) => {
    return storeUser(values);
  },
  login: async (values) => {
    return loginUser(values);
  },
  restLogin: async (values) => {
    return LoginRest(values);
  },
  checktoken: async (token) => {
    return tokenCheck(token);
  },
};
