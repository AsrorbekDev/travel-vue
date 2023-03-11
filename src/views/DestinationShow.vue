<script>

import sourceData from '@/data.json';

export default {
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.destinations.find(destination => destination.id === this.destinationId)
    }
  }
}

</script>

<template>
  <div v-show="destination.id">
    <h2>Hello {{ destination.name }}</h2>
    <div class="destination-details">
      <img :alt="destination.name" height="250"
           src="https://www.worldatlas.com/r/w960-q80/upload/76/ef/03/shutterstock-1014749632.jpg" width="500">
      <p>{{ destination.description }}</p>
    </div>
  </div>
</template>