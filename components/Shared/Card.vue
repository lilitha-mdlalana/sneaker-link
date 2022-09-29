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
        <img :src="imageUrl" :alt="shoeName" height="214px" width="300px" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <div>
          <p class="shoeName">{{ shoeName }}</p>
          <p>$ {{ shoePrice }}</p>
        </div>
      </div>
    </div>
  </div>
  </nuxt-link>
  
</template>
<style scoped>
.shoeName{
  max-width:200px;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>