<script>

export default {
  props: {
    experience: {type: Object, required: true}
  }
}
</script>

<template>
  <div class="card">
    <img
        :alt="experience.name"
        src="https://www.worldatlas.com/r/w960-q80/upload/76/ef/03/shutterstock-1014749632.jpg"
    >
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>

<style scoped>

</style>