<template>
  <div>
    <img :src="cardInfo.imgURL">
    <p class="title">{{ cardInfo.title }}</p>
    <p class="description">{{ cardInfo.description }}</p>
  </div>
</template>

<script>
export default {
  name: "KeyCardVue",
  props: {
    cardInfo: Object,
  },
}
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 2rem;
}

.description {
  font-size: 1.5rem;
}

</style>