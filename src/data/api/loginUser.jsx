import axios from "axios";
import { domain } from "../../store/store";
import Swal from "sweetalert2";

// export const loginUser = async (values) => {
//   let final;
//   await axios
//     .post(domain + "/api/auth/local/", {
//       identifier: values.email,
//       password: values.password,
//     })
//     .then((res) => {
//       final = res.data;
//     })
//     .catch((e) => {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: e?.response?.data?.error?.message,
//       });
//     });
//   return final;
// };

export const loginUser = async (values) => {
  let final;
  await axios
    .post(domain + "/api/auth/local/", {
      identifier: values.email,
      password: values.password,
    })
    .then((res) => {
      final = res.data;
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
