import axios from "axios";
import { domain } from "../../store/store";

export const indexProducts = async () => {
  let final = [];
  await axios
    .get(domain + "/api/products", {
      params: {
        populate: "*",
      },
    })
    .then((res) => {
      final = res.data.data;
    });
  return final;
};
