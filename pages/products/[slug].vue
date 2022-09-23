<script setup>
import { useShoeStore } from "~/store/shoes";

const route = useRoute()
const shoes = useShoeStore()

console.log(shoes.getShoeById(route.params.slug))
</script>

<template>
  <h1>sneaker at {{ $route.params.slug }}</h1>
</template>
