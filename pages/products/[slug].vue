<script setup>
import { useShoeStore } from "~/store/shoes";
import { useCartStore } from "~~/store/cart";
const route = useRoute();
const shoes = useShoeStore();
const cart = useCartStore();
shoes.getShoes();
const product = shoes.getShoeById(route.params.slug);
console.log(product);
</script>

<template>
  <div class="container my-4">
    <div class="columns is-half-desktop">
      <div>
        <figure>
          <img
            :src="
              product.media.smallImageUrl !== null
                ? product.media.smallImageUrl
                : '/images/sneaker_not_found.jpg'
            "
            class="image"
            alt=""
          />
        </figure>
      </div>
      <div class="is-primary">
        <h1 class="is-4">{{ product.shoe }}</h1>
        ${{ product.retailPrice }}<br />
        {{ product.brand }} | {{ product.name }}<br />
        Gender: {{ product.gender }}<br />
        Released : {{ product.releaseDate }}<br />
        <hr />
        <button class="button is-link" @click="cart.addToCart(product)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
