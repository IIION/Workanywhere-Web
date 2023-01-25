<template>
  <div class="card-container">
    <div class="inner-container">
      <p class="card-num">{{ cardInfo.num }}</p>
      <p class="card-description1">{{ cardInfo.description1 }}</p>
      <p class="card-description2">{{ cardInfo.description2 }}</p>
      <p class="card-description3">{{ cardInfo.description3 }}</p>
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
.card-container {
  background-color: #F7F6F5;
  border-radius: 10px;
}
.inner-container {
  padding: 30px 20px 0px 20px;
}

.card-num {
  font-family: "Montserrat";
  font-size: 1.8rem;
  font-weight: 500;
  color: #ff4e31;
}

.card-description1 {
  font-size: 2.3rem;
  font-weight: 700;
  /* 글자수에 따라 크기가 달라지는것을 방지. 다른 방법은? */
  min-height: 100px;
}

.card-description2 {
  font-size: 1.5rem;
  line-height: 26.06px;
  color: #3D3D3D;
  min-height: 150px;
}

@media screen and (max-width: 768px) {
  .card-description1 {
    min-height: unset;
  }
  .card-description2 {
    min-height: unset;
  }
}
</style>