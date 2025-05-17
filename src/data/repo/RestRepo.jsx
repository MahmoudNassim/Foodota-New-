import { getOrderItem } from "../api/get_orderItem";
import { indexProducts } from "../api/index_Products";
import { indexRestaurants } from "../api/index_restaurants";
import { orderItem } from "../api/order_item";

export const RestRepo = {
  products_index: async () => {
    return await indexProducts();
  },
  restaurants_index: async () => {
    return await indexRestaurants();
  },
  getOrderItem: async () => {
    return await getOrderItem();
  },
  storeProducts: async (cartItems) => {
    return await Promise.all(cartItems.map((item) => orderItem(item)));
  },
};
