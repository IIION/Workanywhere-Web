<template>
  <div class="container">
    <img :src="cardInfo.imgURL">
    <div class="detail">
      <p class="semititle">{{ cardInfo.semititle }}</p>
      <p class="title">{{ cardInfo.title }}</p>
      <p class="description">{{ cardInfo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  props: {
    cardInfo: Object
  }
}
</script>

<style scoped>
.container {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
}
img {
  display : block;
  height: 30vh;
  object-fit:cover;
}
.detail {
  min-height: 25vh;
  padding: 39px;
}

p {
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
}
.semititle {
  font-weight: 400;
  font-size: 2rem;
}
.title {
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 19px;
}
.description {
  font-weight: 400;
  font-size: 1.5rem;
}
</style>