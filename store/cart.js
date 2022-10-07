import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart-store",
  state: () => {
    return {
      cart: [],
      id: 0,
    };
  },
  actions: {
    addToCart(product) {
      this.cart.push({ product, id: this.id++ });
      localStorage.setItem("cart-items", JSON.stringify(cart));
    },
  },
  getters: {
    getCartItems: (state) => {
          const cartItems = JSON.parse(localStorage.getItem("cartItems"));
          return cartItems
    },
    getCartLength: (state) => state.cart.length,
  },
});
