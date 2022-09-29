import { defineStore } from "pinia";

export const useShoeStore = defineStore({
  id: "shoe-store",
  state: () => {
    return {
      isLoggedIn: false,
      shoes: [],
      selectedBrands:[],
    };
  },
  actions: {
    async getShoes() {
        const data = await fetch("/api/sneakers");
        const json = await data.json();
        this.shoes = json.results;
    },
    addSelectedShoeBrands(state, shoeBrands) {
      state.selectedBrands = shoeBrands;
    }
  },
  getters: {
    allShoes: (state) => state.shoes,
    getFirstFourShoes: (state) => state.shoes.reverse().slice(0, 4),
    getShoeById: (state) => {
      return (productId) => state.shoes.find((shoe) => shoe.id === productId);
    },
    getFourJordanSneakers: (state) => state.shoes.filter((shoeBrand) => shoeBrand.brand === 'Jordan').slice(0, 4),
    uniqueBrands: (state) => {
      const brands = new Set();
      state.shoes.forEach(shoeBrand => brands.add(shoeBrand.brand))
      return brands
    },
    includeShoeByBrand: (state) => (shoe) => {
      if (state.selectedBrands === 0) return true;
      return state.selectedBrands.includes(shoe.brand)
    },
    filteredShoes: (state) => {
      return state.shoes.filter(shoe => shoe.brand === "Jordan")
    }
  },
});
