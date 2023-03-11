<script>

import src from '@/data.json';
import ExperiencesCard from "@/components/ExperienceCard.vue";

export default {
  components: {ExperiencesCard},
  props: {
    id: {type: Number, required: true}
  },
  computed: {
    destination() {
      return src.destinations.find(
          (destination) => destination.id === this.id
      )
    }
  }
}

</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :alt="destination.name" height="250"
           src="https://www.worldatlas.com/r/w960-q80/upload/76/ef/03/shutterstock-1014749632.jpg" width="500">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <RouterLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}">
        <ExperiencesCard
            :experience="experience"
        />
      </RouterLink>

    </div>
  </section>
</template>