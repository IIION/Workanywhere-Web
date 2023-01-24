<template>
  <div class="container-wrap">
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
.container-wrap {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
}
img {
  height: 40vh;
  width: 100%;
  object-fit: cover;
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
  font-size: 1.7rem;
}
.title {
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 19px;
}
.description {
  font-size: 1.5rem;
  width: 100%;
  color: #666666;
  white-space: pre-wrap;
}

@media screen and (max-width: 768px) {
  .detail {
  min-height: 0;
  padding: 39px;
  }
}
</style>