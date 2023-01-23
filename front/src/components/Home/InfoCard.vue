<template>
  <div class="card-container">
    <div class="image-container">
      <img :src="cardInfo.imgURL" />
    </div>
    <div class="texts">
      <p class="title">{{ cardInfo.title }}</p>
      <p class="description1">{{ cardInfo.description1 }}</p>
      <p class="description2">{{ cardInfo.description2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCardVue",
  props: {
    cardInfo: Object,
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

p {
  font-family: "Montserrat";
}

.image-container {
  width: 50%;
  height: 50%;
  background: #F7F6F5;
  margin: 0px 80px 0px 0px;
  border-radius: 20px;
  overflow: hidden;
}

img {
  max-width:100%;
  height: auto;
  object-fit: fill;
}

.texts {
  width: 50%;
  text-align: left;
}

.title {
  font-weight: 700;
  font-size: 2.5rem;
}

.description1 {
  font-weight: 500;
  font-size: 1.5rem;
  color: #666666;
  line-height: 1.8;
}

.description2 {
  font-weight: 500;
  font-size: 1.5rem;
  color: #666666;
  line-height: 1.8;
}
@media screen and (max-width: 768px) {
  .card-container{
    flex-direction: column;
  }
  .image-container {
    width: 100%;
    margin: 0;
    overflow: hidden;
    border-radius: 0;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  .texts {
    width: 90%;
    text-align: center;
  }

}
</style>