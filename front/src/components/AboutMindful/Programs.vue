<template>
  <div class="container">
    <p class="title">PROGRAMS</p>
    <div class="cards">
      <ProgramCardVue
      class="card"
      :program="program[0]" 
      />
      <ProgramCardVue
      class="card"
      :program="program[1]" 
      />
      <ProgramCardVue
      class="card"
      :program="program[2]" 
      />
      <ProgramCardVue
      class="card"
      :program="program[3]" 
      />
      <ProgramCardVue
      class="card"
      :program="program[4]" 
      />
    </div>
    <p class="comment">지역 및 부대시설에 따라 프로그램은 변경될 수 있습니다.</p>
  </div>
</template>

<script>
import ProgramCardVue from "./ProgramCard.vue"
export default {
  name: "ProgramsVue",
  components: {
    ProgramCardVue
  },
  data: function () {
    return {
      program: [{
        imgURL: require("@/assets/AboutMindful/program1.jpg"),
        subtitle: "리더들의 심신 안정을 위한 내면 탐색 과정",
        title: "Restoring you",
        description1: ["조직과 개인의 심신 안정을 위해 HRD 전문가와 직접 개발한 명상 및 자기관리 프로그램", "내면을 탐색하고 무념의 감각을 느낄 수 있는 시간을 가져보세요."]
      },
      {
        imgURL: require("@/assets/AboutMindful/program2.jpg"),
        subtitle: "전문 도수치료사의",
        title: "1:1 체형 교정 테라피",
        description1: ["전문 도수치료사가 신체나 자세의 불편함을 바로 잡아주는 1:1 개별 맞춤형 체형 교정 테라피", "피로를 풀고 지친 몸에 활력을 되찾는 시간을 가져보세요"]
      },
      {
        imgURL: require("@/assets/AboutMindful/program3.jpg"),
        subtitle: "INSIGHT TALK",
        title: "인사이트 토크",
        description1: ["C-레벨이 고민하는 주제들에 대해서  주제 및 목적별에 맞는 전문가를 초빙하여", "유익한 인사이트를 얻을 수 있는 시간"]
      },
      {
        imgURL: require("@/assets/AboutMindful/program3.jpg"),
        subtitle: "리더들의 네트워킹",
        title: "애니웨어 워커스 파티",
        description1: ["편안한 분위기에서 로컬 푸드와 함께 식사를 하면서", "리더로서의 고민을 나누고,  조직이 아닌 온전한 나로서 이야기를 나누는 시간"]
      },
      {
        imgURL: require("@/assets/AboutMindful/program3.jpg"),
        subtitle: "온전한 나만의 휴식",
        title: "웰니스 프로그램",
        description1: ["사우나에서 피로를 씻고, 수영장에서 수영을 즐기며", "편안하고 건강한 휴식을 즐겨보세요"]
      },

    ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 30px 0px 30px 0px;
  background-color: #FFFEF7;
}
.title {
  font-family: "Montserrat";
  font-size: 3rem;
  font-weight: 800;
  color: #ff4e31;
}

.cards {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.card {
  width: 60%;
  padding: 10px;
}

.comment {
  color: #666666;
  font-size: 1.3rem;
  margin: 30px 0px 30px 0px;
}
</style>