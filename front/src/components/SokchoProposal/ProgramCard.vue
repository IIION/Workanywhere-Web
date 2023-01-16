<template>
  <div class="card-container">
    <img :src="cardInfo.imgURL" class="card-image" />
    <div class="info">
      <p class="card-location">{{ cardInfo.locationAndDate }}</p>
      <p class="card-title">{{ cardInfo.title }}</p>
      <p class="card-detaildate">{{ cardInfo.detailDate }}</p>
      <p v-for="point in cardInfo.points" :key="point.idx" class="point">
        {{ point }}
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "SokchoProgramCardVue",
  props: {
    cardInfo: Object,
  },
};
</script>
  
  <style scoped>
.card-container {
  border-radius: 20px;
  border: 1px solid #D9D9D9;
}
.card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
}
.info {
  text-align: left;
  padding: 20px;
}
.card-location {
  font-size: 1.3rem;
  color: #191919;
  margin-top:0;
  margin-bottom: 3px;
}

.card-title {
  font-size: 2rem;
  font-weight: 500;
  color: #191919;
  margin: 0;
}

.card-detaildate {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 15px;
}

.point {
  display: inline;
  background-color: #f7f6f5;
  color: #666666;
  padding: 3px 10px 3px 10px;
  border-radius: 20px;
  margin: 0px 5px 0px 0px;
}
</style>