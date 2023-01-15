<template>
  <div class="card-container">
    <!-- 더보기 전 -->
    <div class="before-toggle" v-if="toggleState == false">
      <div>
        <p class="subtitle">INSIGHT TALK</p>
        <p class="title">인사이트 토크</p>
      </div>
      <div>
        <p class="description1">
          C-레벨이 고민하는 주제들에 대해서 주제 및 목적별에 맞는 전문가를 초빙하여
        </p>
        <p class="description1">유익한 인사이트를 얻을 수 있는 시간</p>
        <p class="toggle"> </p>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "ProgramCardVue3",
  data: function () {
    return {
      toggleState: false,
    };
  },
  methods: {
    toggleMoreInfo() {
      this.toggleState = !this.toggleState;
    },
  },
};
</script>
    
<style scoped>
.card-container {
  height: 30vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/AboutMindful/program3.jpg");
  background-size:cover;
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
  margin: 0;
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