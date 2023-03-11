<script>
import src from '@/data.json';

export default {
  props: {
    id: {type: Number, required: true},
    experienceSlug: {type: String, required: true},
  },
  computed: {
    destination() {
      return src.destinations.find(
          destination => destination.id === this.id
      )
    },
    experience() {
      return this.destination.experiences.find(
          experience => experience.slug === this.experienceSlug
      )
    }
  }
}

</script>

<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :alt="experience.name"
         height="300"
         src="https://www.worldatlas.com/r/w960-q80/upload/76/ef/03/shutterstock-1014749632.jpg"
         width="400">
    <p>{{ experience.description }}</p>
  </section>
</template>

<style scoped>

</style>