import { defineStore } from "pinia";

export const useShoeStore = defineStore({
  id: "shoe-store",
  state: () => {
    return {
      isLoggedIn: false,
      shoes: [],
    };
  },
  actions: {
    async getShoes() {
      try {
        const data = await fetch("/api/sneakers");
        const json = await data.json();
        this.shoes = json.results;
      } catch (e) {
        console.log(e);
        throw new Error("Could not get products");
      }
    },
  },
  getters: {
    getFirstFourShoes: (state) => state.shoes.reverse().slice(0, 4),
    getShoeById: (state) => (productId) => state.shoes.find(productId),
  },
});
