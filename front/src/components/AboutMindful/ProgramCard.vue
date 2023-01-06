<template>
  <div class="container">
    <img :src=program.imgURL class="backgroundimage">
    <div class="texts">
      <p class="subtitle">{{ program.subtitle }}</p>
      <p class="title">{{ program.title }}</p>
      <div style="height:50px"></div>
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
.container {
  position: relative;
}
.backgroundimage {
  width: 100%;
  height: 35vh;
  filter: brightness(60%);
  object-fit: cover;
  border-radius: 20px;
}
.texts {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: left;
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
  margin: 0;
}
.description1 {
  color: #FEFEFE;
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
}
</style>