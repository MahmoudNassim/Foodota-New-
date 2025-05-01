import { indexProducts } from "../api/index_Products";
import { indexRestaurants } from "../api/index_restaurants";

export const RestRepo = {
  products_index: async () => {
    return await indexProducts();
  },
  restaurants_index: async () => {
    return await indexRestaurants();
  },
};
