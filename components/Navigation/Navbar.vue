<script setup>
const active = ref(false);
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

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
        <a class="navbar-item"> Brands </a>

      </div>

      <div class="navbar-end" :class="{ 'is-active': active }">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light has-icons-left">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas','shopping-cart']" />
              </span>
            </a>
            <a class="button is-light has-icons-left">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas','heart']" />
              </span>
            </a>
            <a class="button is-light has-icons-left">
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas','user']" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
