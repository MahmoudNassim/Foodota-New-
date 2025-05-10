import axios from "axios";
import { domain } from "../../store/store";
import Swal from "sweetalert2";

export const LoginRest = async (values) => {
  let final;
  await axios
    .post(domain + "/api/auth/local/", {
      identifier: values.email,
      password: values.password,
    })
    .then(async (res) => {
      final = res.data;

      const userData = await axios.get(`${domain}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${final.jwt}`,
        },
        params: {
          populate: "products",
        },
      });

      final.user = userData.data;
      console.log(final.user);
    })
    .catch((e) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: e?.response?.data?.error?.message,
      });
    });
  return final;
};
