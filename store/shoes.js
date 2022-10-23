import { defineStore } from "pinia";

import { ALL_SHOES, GET_FIRST_FOUR_SHOES } from "~/store/constants";

export const useShoeStore = defineStore({
  id: "shoe-store",
  state: () => {
    return {
      isLoggedIn: false,
      shoes: [],
      selectedBrands: [],
      loading: true,
    };
  },
  actions: {
    async getShoes() {
      const baseUrl = "https://v1-sneakers.p.rapidapi.com/v1/sneakers";
      const response = await fetch(`${baseUrl}?limit=100`, {
        headers: {
          "X-RapidAPI-KEY":
            "77a4902edbmsh916c264c20706a6p1da8d5jsn42e672a12367",
          "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
        },
      });
      const data = await response.json();
      this.shoes = await data.results;
      this.loading = false;
    },
    addSelectedShoeBrands(state, shoeBrands) {
      state.selectedBrands = shoeBrands;
    },
  },
  getters: {
    [ALL_SHOES]: (state) => state.shoes,
    [GET_FIRST_FOUR_SHOES]: (state) => state.shoes.reverse().slice(0, 4),
    [GET_SHOE_BY_ID]: (state) => {
      return (productId) => state.shoes.find((shoe) => shoe.id === productId);
    },
    [GET_FOUR_JORDAN_SNEAKERS]: (state) => {
      return state.shoes
        .filter((shoeBrand) => shoeBrand.brand === "Jordan")
        .slice(0, 4);
    },
    [UNIQUE_BRANDS]: (state) => {
      const brands = new Set();
      state.shoes.forEach((shoeBrand) => brands.add(shoeBrand.brand));
      return brands;
    },
    [INCLUDE_SHOE_BY_BRAND]: (state) => (shoe) => {
      if (state.selectedBrands === 0) return true;
      return state.selectedBrands.includes(shoe.brand);
    },
    [FILTERED_SHOES]: (state) => {
      return state.shoes.filter((shoe) => shoe.brand === "Jordan");
    },
  },
});
