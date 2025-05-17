import axios from "axios";
import { domain } from "../../store/store";

export const getOrderItem = async () => {
  let final = [];
  await axios
    .get(domain + "/api/order-items", {
      params: {
        populate: {
          products: {
            populate: ["product_img"],
          },
          restaurant: {
            populate: ["brand_img"],
          },
          order: {
            populate: ["order_items"],
          },

          users: {
            fields: ["documentId", "email"],
          },
        },
      },
    })
    .then((res) => {
      final = res.data.data;
    });
  return final;
};
