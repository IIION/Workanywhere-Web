<template>
  <div class="card-container">
    <!-- 더보기 전 -->
    <div class="before-toggle" v-if="toggleState == false">
      <div>
        <p class="subtitle">리더들의 네트워킹</p>
        <p class="title">애니웨어 워커스 파티</p>
      </div>
      <div>
        <p class="description1">
          편안한 분위기에서 로컬 푸드와 함께 식사를 하면서
        </p>
        <p class="description1">리더로서의 고민을 나누고, 조직이 아닌 온전한 나로서 이야기를 나누는 시간</p>
        <p class="toggle"> </p>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "ProgramCardVue4",
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/AboutMindful/program4.jpg");
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