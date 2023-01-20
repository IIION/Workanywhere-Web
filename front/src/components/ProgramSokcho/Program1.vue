<template>
  <div class="card-container">
    <!-- 더보기 전 -->
    <div class="before-toggle" v-if="toggleState == false">
      <div>
        <p class="subtitle">리더들의 심신 안정을 위한 내면 탐색 과정</p>
        <p class="title">Restoring you</p>
      </div>
      <div>
        <p class="description1">
          조직과 개인의 심신 안정을 위해 HRD 전문가와  직접 개발한 명상 및 자기관리 프로그램
        </p>
        <p class="description1">내면을 탐색하고 무념의 감각을 느낄 수 있는 시간을 가져보세요.</p>
        <p class="toggle" @click="toggleMoreInfo">더보기 ></p>
      </div>
    </div>

    <!-- 더보기 후 -->
    <div class="after-toggle" v-if="toggleState==true">
      <div class="more-texts-inner-container">
        <p class="more-texts-header1">1부 | 고통과 스트레스의 진실을 마주하다</p>
        <p class="arrow">></p>
        <div>
          <p class="more-texts-detail">내면 고찰 질문지 답하기</p>
          <p class="more-texts-detail">나의 이미지(에고) 인식하고 마주하기</p>
          <p class="more-texts-detail">자유로운 의견 나누기</p>
        </div>
      </div>
      <div class="more-texts-inner-container">
        <p class="more-texts-header1">2부 | 몸과 마음이 평안해지는 방법</p>
        <p class="arrow">></p>
        <div>
          <p class="more-texts-detail">싱잉볼 명상 - 소리를 통한 내면 치유 명상</p>
          <p class="more-texts-detail">호흡에 집중하기</p>
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
  name: "ProgramCardVue1",
  data: function () {
    return {
      toggleState: false
    }
  },
  methods: {
    toggleMoreInfo() {
      this.toggleState = !this.toggleState
    }
  }
}
</script>

<style scoped>
.card-container {
  height: 30vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("@/assets/AboutMindful/program1.jpg");
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
.arrow {
  color: #FEFEFE;
  margin: 0;
  font-weight: 700;
  font-size: 1.3rem;
  min-width: 30px;
  text-align: center;
}
.more-texts-detail {
  color: #FEFEFE;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.3rem;
}
</style>


