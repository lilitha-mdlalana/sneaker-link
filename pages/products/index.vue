<script setup>
import { useShoeStore } from "~/store/shoes";

const store = useShoeStore();
store.getShoes();

const selectedValues = ref([]);
const selectValue = () => {
  console.log(selectedValues.value);
};
</script>
<template>
  <div>
    <NuxtLayout name="shoe-filters">
      <template #sidebar>
        <h1 class="is-link">Filter By Brand</h1>
        <form @submit.prevent class="container">
          <SharedDropdown dropdownTitle="Brands">
            <p class="container">
              <label class="checkbox">
                <input
                  type="checkbox"
                  :value="shoeBrand"
                  v-model="selectedValues"
                  @change="selectValue"
                />
                {{ shoe }}
              </label>
            </p>
          </SharedDropdown>
          <br />
          <button type="submit" class="button is-primary mt-2">Submit</button>
        </form>
      </template>
      <template #main>
        <div class="columns is-multiline">
          <SharedCard
            class="column is-3"
            v-for="shoe in store.allShoes"
            :key="shoe.id"
            :image-url="
              shoe.media.smallImageUrl != null
                ? shoe.media.smallImageUrl
                : `/images/sneaker_not_found.jpg`
            "
            :shoe-name="shoe.shoe"
            :shoe-price="shoe.retailPrice"
            :route="`${shoe.id}`"
          />
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3);
  grid-template-rows: repeat(1fr);
}
</style>
