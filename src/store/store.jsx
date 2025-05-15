import { create } from "zustand";
import cakeh from "../assets/images/cakeh.jpg";
import sushi from "../assets/images/sushi.jpg";
import breakfast from "../assets/images/breakfast.jpg";
import wrap from "../assets/images/wrap.jpg";
import drink from "../assets/images/drink.jpg";
import organic from "../assets/images/organic.jpg";
import { RestRepo } from "../data/repo/RestRepo";
import Swal from "sweetalert2";

export const domain = "http://localhost:1337";

export const useNewArrival = create(() => ({
  newArrival: [
    {
      img: cakeh,
      sort: "Appetizers",
      name: "Amazing Decadent Pecan PIE Best Cake",
      details:
        "Pie is a rich chewy, nutty, sweet holiday staple. For many the holidays aren’t the holidays without must explain all this  of denouncing pleasure and praising pain was born and…",
    },
    {
      img: wrap,
      sort: "Appetizers",
      name: "Vegetable & Chicken Wrap For Lunch",
      details:
        "I love a good salad for lunchand Pakistan posted dinner.And I have them often. But I also love my carbs. So a little while back,qui dolorem ipsum quia dolor sit…",
    },
    {
      img: sushi,
      sort: "Sushi",
      name: "Black Special hot Suchi with Salad Serving",
      details:
        "I always love a little sweet andcreamy salty taste at parties and this Brie has just that! Baked brie is an appetizer that will wow the entire party. Sed ut perspiciatis…",
    },
    {
      img: breakfast,
      sort: "Appetizers",
      name: "Best Ever Healthy Breakfast Everyday",
      details:
        "Impress your family with this beautiful cut of meat! When making this prime rib add healthy ingredients in your breakfast and stay active. Hope you’ll enjoy this cooked breakfast. Sed ut…",
    },
  ],
}));
export const useResturaunt = create(() => ({
  restaurant: [
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
    {
      cover: drink,
      name: "Organic Arcadian Food",
      brand: organic,
      date: "12:01 am - 11:59 pm",
      location: " Main Boulevard, Lahore,",
    },
  ],
}));

export const useRestaurantStore = create((set) => ({
  restaurants: [],
  setRestaurants: async () => {
    const data = await RestRepo.restaurants_index();
    set({ restaurants: data });
  },
}));
export const useProducts = create((set) => ({
  products: [],
  setProducts: async () => {
    const data = await RestRepo.products_index();
    set({ products: data });
  },
}));

export const useCart = create((set, get) => ({
  isCartOpen: false,
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  // toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  updateCart: (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    set({ cart: newCart });
  },
  removeCart: () => {
    localStorage.removeItem("cart");
    sessionStorage.removeItem("cart");
    set({ cart: [] });
  },

  increamentQty: (index) => {
    const cart = [...get().cart];
    cart[index].qty++;
    get().updateCart(cart);
  },

  decreamentQty: (index) => {
    const cart = [...get().cart];
    if (cart[index].qty > 1) {
      cart[index].qty--;
    } else {
      cart.splice(index, 1);
    }
    get().updateCart(cart);
  },

  removeItem: (index) => {
    const cart = [...get().cart];
    cart.splice(index, 1);
    get().updateCart(cart);
  },

  addToCart: (product) => {
    const cart = [...get().cart];
    const index = cart.findIndex((el) => el.documentId === product.documentId);
    if (index === -1) {
      Swal.fire({
        icon: "success",
        title: "Added To Cart",
        showConfirmButton: false,
        timer: 1500,
      });
      cart.push({ ...product, qty: 1 });
    } else {
      cart[index].qty++;
      Swal.fire({
        icon: "info",
        title: "Qty increased",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    get().updateCart(cart);
  },
}));
