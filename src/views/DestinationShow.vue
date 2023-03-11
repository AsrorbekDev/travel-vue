<script>

import src from '@/data.json';

export default {
  props: {
    id: {type: String, required: true}
  },
  computed: {
    destination() {
      return src.destinations.find(
          (destination) => destination.id === parseInt(this.id)
      )
    }
  }
}

</script>

<template>
  <section v-if="destination" class="destinations">
    <div v-show="destination.id">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :alt="destination.name" height="250"
             src="https://www.worldatlas.com/r/w960-q80/upload/76/ef/03/shutterstock-1014749632.jpg" width="500">
        <p>{{ destination.description }}</p>
      </div>
    </div>
  </section>
</template>