import { indexProducts } from "../api/index_Products";
import { indexRestaurants } from "../api/index_restaurants";
import { storeProducts } from "../api/store_products";

export const RestRepo = {
  products_index: async () => {
    return await indexProducts();
  },
  restaurants_index: async () => {
    return await indexRestaurants();
  },
  storeProducts: async (productData) => {
    return await storeProducts(productData);
  },
};
