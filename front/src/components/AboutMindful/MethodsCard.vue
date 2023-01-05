<template>
  <div class="container">
    <div class="inner-container">
      <p class="card-num">{{ cardInfo.num }}</p>
    <p class="card-description1">{{ cardInfo.description1 }}</p>
    <p class="card-description2">{{ cardInfo.description2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MethodsCardVue",
  props: {
    cardInfo: Object
  }
}
</script>

<style scoped>
.container {
  background-color: #F7F6F5;
  border-radius: 10px;
}
.inner-container {
  padding: 30px 20px 30px 20px;
}

.card-num {
  font-family: "Montserrat";
  font-size: 1.8rem;
  font-weight: 500;
  color: #ff4e31;
}

.card-description1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.card-description2 {
  font-size: 1.5rem;
  line-height: 26.06px;
  color: #3D3D3D;
}
</style>