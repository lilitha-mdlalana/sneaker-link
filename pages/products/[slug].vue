<script setup>
import { useShoeStore } from "~/store/shoes";

const route = useRoute()
const shoes = useShoeStore()
shoes.getShoes()
const product = shoes.getShoeById(route.params.slug)
console.log(product)
</script>

<template>
  <div class="container my-4">
    <div class="columns is-half-desktop">
      <div>
        <figure>
          <img :src="product.media.smallImageUrl" class="image" alt="">
        </figure>
      </div>
      <div class="is-primary">
        <h1 class="is-4">{{product.shoe}}</h1>
        ${{product.retailPrice}}<br/>
        {{product.brand}} | {{product.name}}<br/>
        {{product.gender}}<br/>
        Released : {{product.releaseDate}}<br/>
        <hr>
        <button class="button is-link">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

