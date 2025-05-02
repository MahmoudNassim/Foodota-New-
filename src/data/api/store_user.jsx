import axios from "axios";
import { domain } from "../../store/store";
import Swal from "sweetalert2";

export const storeUser = async (values) => {
  let final;

  await axios
    .post(domain + "/api/auth/local/register", {
      username: values.username,
      email: values.email,
      password: values.password,
    })
    .then(async (info) => {
      await axios
        .put(domain + `/api/users/${info.data.user.id}`, {
          phone: values.phone,
        })
        .then(() => {
          final = info.data;
        });
    })
    .catch((e) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: e?.response?.data?.error?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    });
  return final;
};
