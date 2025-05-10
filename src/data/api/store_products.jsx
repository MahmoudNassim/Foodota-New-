import axios from "axios";
import { domain } from "../../store/store";

export const storeProducts = async (productData) => {
  const formData = new FormData();

  formData.append("data[product_img]", productData.product_img);
  formData.append("data[product_name]", productData.product_name);
  formData.append("data[product_price]", productData.product_price);
  formData.append("data[product_details]", productData.product_details);

  return await axios
    .post(domain + "/api/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
