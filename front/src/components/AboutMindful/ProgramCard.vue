<template>
  <div class="card-container" :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + program.imgURL + ')'}">
    <div class="texts">
      <p class="subtitle">{{ program.subtitle }}</p>
      <p class="title">{{ program.title }}</p>
      <p class="description1" v-for="description in program.description1" :key="description.idx">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramCardVue",
  props: {
    program: Object
  }
}
</script>

<style scoped>
.card-container {
  height: 25vh;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-position: center;
}
.texts {
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.subtitle {
  font-size: 1.3rem;
  color: #FEFEFE;
  margin: 0px 0px 5px 0px;
}
.title {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 2rem;
  color: #FF4E31;
  margin: 0px 0px 50px 0px;
}
.description1 {
  color: #FEFEFE;
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
}
</style>