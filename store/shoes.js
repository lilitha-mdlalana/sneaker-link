import { defineStore } from "pinia";

export const useShoeStore = defineStore({
  id: "shoe-store",
  state: () => {
    return {
      isLoggedIn: false,
      shoes: [],
      selectedBrands: [],
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
      this.shoes = data.results;
    },
    addSelectedShoeBrands(state, shoeBrands) {
      state.selectedBrands = shoeBrands;
    },
  },
  getters: {
    allShoes: (state) => state.shoes,
    getFirstFourShoes: (state) => state.shoes.reverse().slice(0, 4),
    getShoeById: (state) => {
      return (productId) => state.shoes.find((shoe) => shoe.id === productId);
    },
    getFourJordanSneakers: (state) =>
      state.shoes
        .filter((shoeBrand) => shoeBrand.brand === "Jordan")
        .slice(0, 4),
    uniqueBrands: (state) => {
      const brands = new Set();
      state.shoes.forEach((shoeBrand) => brands.add(shoeBrand.brand));
      return brands;
    },
    includeShoeByBrand: (state) => (shoe) => {
      if (state.selectedBrands === 0) return true;
      return state.selectedBrands.includes(shoe.brand);
    },
    filteredShoes: (state) => {
      return state.shoes.filter((shoe) => shoe.brand === "Jordan");
    },
  },
});
