<template>
  <div class="cell-container" @click="moveToDetail(cellInfo.moveTo)">
    <img :src="cellInfo.imgURL" class="cell-image" />
    <div class="info">
      <p class="locationAndDate">
        {{ cellInfo.region + " | " + cellInfo.period }}
      </p>
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
    cellInfo: Object,
  },
  methods: {
    moveToDetail(route) {
      this.$router.push({name: route})
    }
  }
};
</script>

<style scoped>
.cell-container {
  border-radius: 20px;
  box-shadow: 9px 21px 23px -12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.cell-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
}
.info {
  padding:20px;
  text-align: left;
}
.locationAndDate {
  font-size: 1.3rem;
  color: #191919;
  margin-top: 0;
  margin-bottom: 3px;
}
.title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #191919;
  margin: 0;
}
.date {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 15px;
}
.tag {
  display: inline;
  background-color: #F7F6F5;
  color: #666666;
  padding: 3px 10px 3px 10px;
  border-radius: 20px;
  margin: 0px 5px 0px 0px;
}
@media screen and (max-width: 768px) {
  .cell-container {
    width: 100%; 
  }
}
</style>