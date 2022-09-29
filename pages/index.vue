<script setup>
import { useShoeStore } from "~~/store/shoes";

const store = useShoeStore();
store.getShoes();

const searchForShoes = () => {
  const router = useRouter();
  router.push({
    path: '/products',
    query:{brands:'Jordans'}
  })
}
</script>

<template>
  <main>
    <Head>
      <Title>Sneaker City</Title>
    </Head>
    <section>
        <nuxt-link href="#" title="You'd assume this goes somewhere.But nah it doesn't">
          <div class="hero">
            <img
              src="~/assets/images/new_items_banner.webp"
              class="image"
              alt="New items banner"
            />
          </div>
        </nuxt-link>
      <div class="container mt-3">
        <div class="is-flex is-justify-content-space-between">
          <p>New Arrivals</p>
          <nuxt-link class="">View All</nuxt-link>
        </div>

        <div class="columns is-centered mt-3">
          <SharedCard
            v-for="shoe in store.getFirstFourShoes"
            :key="shoe.id"
            :image-url="shoe?.media?.smallImageUrl"
            :shoe-name="shoe.shoe"
            :shoe-price="shoe.retailPrice"
            :route="`products/${shoe.id}`"
          />
        </div>
      </div>
    </section>
    <section>
        <a @click="searchForShoes">
          <div class="hero-body">
            <img
              src="~/assets/images/promotional_image-1.jpg"
              alt="Jordans promotional image"
            />
          </div>
        </a>
      <div class="container">
        <h1>Best of Jordans</h1>
        <div class="columns is-centered m-1">
          <SharedCard
            v-for="shoe in store.getFourJordanSneakers"
            :key="shoe.id"
            :image-url="shoe?.media?.smallImageUrl"
            :shoe-name="shoe.shoe"
            :shoe-price="shoe.retailPrice"
            :route="`products/${shoe.id}`"
          />
        </div>
      </div>
    </section>
  </main>
</template>
