<script setup>

import sourceData from '@/data.json';

let destinations = sourceData.destinations;

</script>

<template>
  <div id="nav">
    <RouterLink id="logo" to="/">Travel the world</RouterLink>
    <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
    >
      {{ destination.name }}
    </RouterLink>
  </div>
</template>

<!--<style lang="css">-->
<!--#nav .active-class {-->
<!--  color: red;-->
<!--  border-bottom: 2px solid red;-->
<!--}-->
<!--</style>-->