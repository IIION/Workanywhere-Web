<template>
  <div>
    <div class="img-container">
      <img :src=detail.imgURL class="banner-img">
      <div class="banner-description">
        <p class="type">{{ detail.type }}</p>
        <p class="title">{{ detail.title }}</p>
        <p class="semititle">{{ detail.semititle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBanner",
  props: {
    detail: Object
  }
}
</script>

<style scoped>
.img-container {
  position: relative;
}

.banner-img {
  display: block;
  width: 100%;
  filter: brightness(74%);
}

.banner-description {
  position: absolute;
  top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
}

.type {
  font-family: "Montserrat";
  font-size: 2rem;
  font-weight: 400;
  color: #FF4E31;
  margin: 0;
}

.title {
  font-size: 2rem;
  font-weight: 400;
  color: #FFFBE3;
  margin-top: 61px;
  margin-bottom: 0;
}

.semititle {
  font-family: "Montserrat";
  font-size: 4rem;
  font-weight: 700;
  color: #FFFBE3;
  margin: 0;
}

</style>