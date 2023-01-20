<template>
    <div class="container">
      <img :src="cellInfo.imgURL" class="cell-image">
      <div class="info">
        <p class="locationAndDate">{{ cellInfo.region + ' | ' + cellInfo.period }}</p>
        <p class="title">{{ cellInfo.title }}</p>
        <p class="date">{{ cellInfo.date }}</p>
        <p v-for="tag in cellInfo.tags" :key="tag.idx" class="tag"> 
          {{ tag }}
        </p>
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
  box-shadow: 9px 21px 23px -12px rgba(0, 0, 0, 0.1);
}
.cell-image {
  width: 100%;
  height: 65%;
  object-fit: fill;
  border-radius: 20px 20px 0px 0px;
}
.info {
  width: 90%;
  padding-left: 15px;
  text-align: left;
}
.locationAndDate {
  font-size: 1.4rem;
  color: #191919;
  margin-bottom: 5px;
}
.title {
  font-size: 1.7rem;
  font-weight: 500; 
  color: #191919;
  margin: 0;
}
.date {
  font-size: 1.2rem;
  color:#666666;
  margin-bottom: 15px;
}
.tag {
  display: inline;
  font-size: 1.3rem;
  background-color: #F7F6F5;
  color: #666666;
  padding: 3px 10px 3px 10px;
  border-radius: 20px;
  margin: 0px 5px 0px 0px;
}
</style>