<script setup>
defineProps({
  imageUrl: String,
  shoeName: String,
  shoePrice: Number,
  route:String,
});
</script>

<template>
  <nuxt-link :to="route">
    <div class="card m-1">
    <div class="card-image">
      <figure class="image">
        <img :src="imageUrl" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <div class="">
          <p>{{ shoeName }}</p>
          <p>$ {{ shoePrice }}</p>
        </div>
      </div>
    </div>
  </div>
  </nuxt-link>
  
</template>
