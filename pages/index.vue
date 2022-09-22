<script setup>
import { useShoeStore } from "~~/store/shoes";

const store = useShoeStore();
store.getShoes();
</script>
<template>
  <main>
    <Head>
      <Title>Sneaker City</Title>
    </Head>
    <section class="hero">
      <a href="#" title="You'd assume this goes somewhere.But nah it doesn't">
        <div class="hero-body">
          <img
            src="~/assets/images/promotional_image-1.jpg"
            class="image"
            alt=""
          />
        </div>
      </a>
    </section>
    <section class="container mt-3">
      <p class="is-bold is-1">New Arrivals</p>
      <div class="columns is-centered mt-3">
        <SharedCard
          v-for="shoe in store.getFirstFourShoes"
          :key="shoe.id"
          :image-url="shoe?.media?.smallImageUrl"
          :shoe-name="shoe.shoe"
          :shoe-price="shoe.retailPrice"
          :route="`listings/${shoe.id}`"
        />
      </div>
    </section>
    <section class="hero is-medium mt-1">
      <a href="#" title="You'd assume this goes somewhere.But nah it doesn't">
        <div class="hero-body">
          <img
            src="~/assets/images/promotional_image-2.jpg"
            alt="Converse promotional image"
          />
        </div>
      </a>
    </section>
  </main>
</template>
