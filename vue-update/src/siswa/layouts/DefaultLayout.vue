<template>
  <div class="bg-gray-100 min-h-screen">
    <AppNavbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '../components/AppNavbar.vue';
</script>
