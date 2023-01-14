<template>
  <div class="program-card-container" :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + cardData.imageURL + ')'}">
    <div class="before-toggle">
      <div>
        <p class="subtitle">{{ cardData.semititle }}</p>
        <p class="title">{{ cardData.title }}</p>
      </div>
      <div>
        <p class="description1" v-for="description in cardData.description" :key="description.idx">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramYeongwolProgramCardVue",
  props: {
    cardData: Object
  }
};
</script>
      
<style scoped>
.program-card-container {
  height: 30vh;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-position: center;
  padding: 40px;
}

.before-toggle {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
}
.subtitle {
  font-size: 1.3rem;
  color: #fefefe;
  margin: 0px 0px 5px 0px;
}
.title {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 2rem;
  color: #ff4e31;
  margin: 0;
}
.description1 {
  color: #fefefe;
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 0px;
  margin-top: 3px;
}
.toggle {
  display: inline-block;
  color: #fefefe;
  font-size: 1.3rem;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  cursor: pointer;
}
</style>