import axios from "axios";
import { domain } from "../../store/store";

export const indexRestaurants = async () => {
  let final = [];
  await axios
    .get(domain + "/api/restaurants", {
      params: {
        populate: "*",
      },
    })
    .then((res) => {
      final = res.data.data;
    });
  return final;
};
