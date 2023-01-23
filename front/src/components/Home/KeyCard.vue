<template>
  <div>
    <img :src="cardInfo.imgURL">
    <div class="texts-container">
      <p class="title">{{ cardInfo.title }}</p>
      <p class="description">{{ cardInfo.description }}</p>
    </div>
    
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
img {
  height: 30vh;
  overflow: hidden;
  object-fit: fill;
}
.title {
  font-weight: 700;
  font-size: 2rem;
}

.description {
  font-size: 1.5rem;
}
@media screen and (max-width: 768px) {
  .title {
    white-space: pre-wrap;
    text-align: center;
  }
  .description {
    white-space: pre-wrap;
  }
  .texts-container {
    margin: 0px 10% 0px 10%;
  }
}
</style>