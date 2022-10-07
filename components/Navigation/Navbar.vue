<script setup>
import { useCartStore } from "~/store/cart";
const active = ref(false);
const cart = useCartStore();

</script>

<template>
  <nav
    class="navbar has-centered-menu"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/"> Sneaker City </nuxt-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': active }"
        @click="active = !active"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': active }"
    >
      <div class="navbar-start">
        <a class="navbar-item"> Men </a>

        <a class="navbar-item"> Women </a>
        <a class="navbar-item"> Kids </a>
        <nuxt-link to="products/" class="navbar-item"> Brands </nuxt-link>
      </div>

      <div class="navbar-end" :class="{ 'is-active': active }">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light has-icons-left" @click="cart.addToCart('item')">
    
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                <span class="cart-length">{{ cart.getCartLength }}</span>
              </span>
            </a>
            
            <a class="button is-light has-icons-left">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'heart']" />
              </span>
            </a>
            <a class="button is-light has-icons-left">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'user']" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar.has-centered-menu .navbar-start {
  flex-grow: 1;
  justify-content: center;
}
.cart-length {
  position: relative;
  bottom: 15px;
  right: -10px;
}
</style>
