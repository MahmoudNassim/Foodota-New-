import { loginUser } from "../api/loginUser";
import { storeUser } from "../api/store_user";

export const AuthRepo = {
  register: async (values) => {
    return storeUser(values);
  },
  login: async (values) => {
    return loginUser(values);
  },
};
