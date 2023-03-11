<script>

export default {
  data() {
    return {
      destination: null
    }
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
  },
  async created() {
    const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`,);
    this.destination = await response.json();
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