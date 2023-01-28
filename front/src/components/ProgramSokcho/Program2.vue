<template>
  <div class="card-container">
    <!-- 더보기 전 -->
    <div class="before-toggle" v-if="toggleState == false">
      <div>
        <p class="subtitle">전문 도수치료사의</p>
        <p class="title">1:1 체형 교정 테라피</p>
      </div>
      <div>
        <p class="description1">
          전문 도수치료사가 신체나 자세의 불편함을 바로 잡아주는 1:1 개별 맞춤형 체형 교정 테라피
        </p>
        <p class="description1">피로를 풀고 지친 몸에 활력을 되찾는 시간을 가져보세요</p>
        <p class="toggle" @click="toggleMoreInfo">더보기 ></p>
      </div>
    </div>

    <!-- 더보기 후 -->
    <div class="after-toggle" v-if="toggleState == true">
      <div class="more-texts-inner-container">
        <p class="more-texts-header1">추천 대상</p>
        <div>
          <p class="more-texts-detail">· 거북목/라운드 숄더가 있는 분</p>
          <p class="more-texts-detail">· 만성 피로가 있으신 분</p>
          <p class="more-texts-detail">· 허리와 어깨가 늘 무겁고 뻐근하신 분</p>
        </div>
      </div>
      <div class="more-texts-inner-container">
        <p class="more-texts-header1">주요 내용</p>
        <div>
          <p class="more-texts-detail">· 개인 체형 진단</p>
          <p class="more-texts-detail">· 자세 개선 및 체형 교정 테라피</p>
          <p class="more-texts-detail">· 셀프 체형 교정 운동 레슨</p>
          <p class="more-texts-detail">· 장기적인 내 몸 관리 제안</p>
        </div>
      </div>
      <div>
        <p class="toggle" @click="toggleMoreInfo">접기 ></p>
      </div>
    </div>


  </div>
</template>
  



<script>
export default {
  name: "ProgramCardVue2",
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
    url("@/assets/AboutMindful/program2.jpg");
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
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.more-texts-inner-container {
  display: flex;
}
.more-texts-header1 {
  color: #FEFEFE;
  font-weight: 700;
  font-size: 1.3rem;
  margin: 0;
  min-width: 250px;
}
.more-texts-detail {
  color: #FEFEFE;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.3rem;
}
@media screen and (max-width: 768px) {
  .more-texts-inner-container {
    flex-direction: column;
  }
  .arrow {
    display: none;
  }
  .more-texts-header1 {
    margin-bottom: 5px;
  }
}
</style>