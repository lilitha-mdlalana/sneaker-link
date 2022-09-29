<script setup>
defineProps({
  dropdownTitle: String,
});
const isOpen = ref();
</script>
<template>
  <div class="dropdown" :class="{'is-active':isOpen}">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="isOpen = !isOpen"
      >
        <span>{{ dropdownTitle }}</span>
        <span class="icon is-small" v-if="!isOpen">
          <FontAwesomeIcon :icon="['fas','angle-down']"/>
        </span>
        <span class="icon is-small" v-else>
          <FontAwesomeIcon :icon="['fas','angle-up']"/>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot />
      </div>
    </div>
  </div>
</template>
