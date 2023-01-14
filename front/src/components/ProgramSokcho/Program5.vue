<template>
  <div
    :class="[toggleState === false ? 'card-container' : 'after-card-container']"
  >
    <!-- 더보기 전 -->
    <div class="before-toggle" v-if="toggleState == false">
      <div>
        <p class="subtitle">온전한 나만의 휴식</p>
        <p class="title">웰니스 프로그램</p>
      </div>
      <div>
        <p class="description1">
          사우나에서 피로를 씻고, 수영장에서 수영을 즐기며
        </p>
        <p class="description1">편안하고 건강한 휴식을 즐겨보세요</p>
        <p class="toggle" @click="toggleMoreInfo">더보기 ></p>
      </div>
    </div>
    <!-- 더보기 후 -->
    <div class="after-toggle" v-if="toggleState == true">
      <div class="after-cards">
        <!-- 카드 하나하나 -->
        <div class="after-card-inner-container">
          <img
            class="after-card-img"
            src="@/assets/ProgramDetail/saunaImage.jpg"
          />
          <p class="after-card-title">치유인(온천 사우나)</p>
          <p class="after-card-description">
            온천수로 피로를 씻고, 사우나에서 편안하고 건강한 휴식을 즐겨보세요
          </p>
        </div>
        <div class="after-card-inner-container">
          <img
            class="after-card-img"
            src="@/assets/ProgramDetail/golfImage.jpg"
          />
          <p class="after-card-title">골프 연습장</p>
          <p class="after-card-description">
            5타석이 있는 깔끔한 시설의 골프연습장 (개인 장비를 지참해야 합니다)
          </p>
        </div>
        <div class="after-card-inner-container">
          <img
            class="after-card-img"
            src="@/assets/ProgramDetail/fitnessImage.jpg"
          />
          <p class="after-card-title">피트니스 센터</p>
          <p class="after-card-description">
            유산소 운동과, 웨이트 트레이닝을 할 수 있는 시설을 갖추고 있어요
          </p>
        </div>
      </div>
      <div class="toggle-container">
        <p class="toggle" @click="toggleMoreInfo">접기 ></p>
      </div>
    </div>
  </div>
</template>
      
<script>
export default {
  name: "ProgramCardVue5",
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("@/assets/AboutMindful/program5.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  background-position: center;
  padding: 40px;
}
.after-card-container {
  height: 30vh;
  border-radius: 20px;
  padding: 40px;
  background-color: black;
  opacity: 0.85;
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

.after-toggle {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.after-cards {
  display: flex;
}
.after-card-inner-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
  height: 50%;
}
.after-card-img {
  height: 100px;
  width: 100%;
  object-fit: cover;
}
.after-card-title {
  color: #fefefe;
  font-size: 1.3rem;
  font-weight: 700;
}
.after-card-description {
  color: #fefefe;
  font-size: 1.3rem;
  margin: 0;
}
.toggle-container {
  text-align: center;
  height: 10%;
}
</style>