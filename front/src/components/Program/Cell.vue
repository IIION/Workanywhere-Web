<template>
    <div class="container">
      <img :src="cellInfo.imgURL">
      <div class="detail">
        <p class="region">{{ cellInfo.region }}</p>
        <p class="period">{{ cellInfo.period }}</p>
        <p class="title">{{ cellInfo.title }}</p>
        <p class="date">{{ cellInfo.date }}</p>
        <p class="tag">{{ cellInfo.tag }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  name: "CellVue",
  props: {
    cellInfo: Object
  }
}
</script>

<style scoped>
.container {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
img {
  display : block;
  height: 30vh;
  object-fit:cover;
}
.title {
  font-weight: 20px;
  font-size: 3rem;
  margin-bottom: 19px;
}
</style>