<script setup>

import TheNavigation from "@/components/layouts/TheNavigation.vue";</script>

<template>

  <TheNavigation/>

  <div class="container">
    <RouterView :key="$route.path"/>
  </div>

</template>