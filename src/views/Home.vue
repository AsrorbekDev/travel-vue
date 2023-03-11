<script setup>

import sourceData from '@/data.json';

let destinations = sourceData.destinations;

</script>

<template>

  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <RouterLink v-for="destination in destinations"
                  :key="destination.id"
                  :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}">
        <h2>{{ destination.name }}</h2>
        <img :alt="destination.name"
             src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/07/San-Blas-panama-Islands.jpg">
      </RouterLink>
    </div>
  </div>

</template>

<style scoped>

</style>