import axios from "axios";
import { domain } from "../../store/store";

export const orderItem = async (item) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  const payload = {
    data: {
      qty: item.qty,
      total: item.qty * item.product_price,
      products: {
        connect: [item.id],
      },
      users: {
        connect: userId ? [userId] : [],
      },
      restaurant: {
        connect: item.restaurant?.[0]?.id,
      },
    },
  };

  return await axios
    .post(domain + "/api/order-items", payload, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        populate: "*",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
