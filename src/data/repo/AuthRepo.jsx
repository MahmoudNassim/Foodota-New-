import { storeUser } from "../api/store_user";

export const AuthRepo = {
  register: async (values) => {
    return storeUser(values);
  },
};
