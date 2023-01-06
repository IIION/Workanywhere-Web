<template>
  <div class="container">
    <p class="title">STAY</p>
    <div class="cards">
      <ProgramCardVue class="card" :program="program[0]" />
    </div>
    <p class="title">WORK</p>
    <div class="cards">
      <ProgramCardVue class="card" :program="program[1]" />
    </div>
    <p class="title">ENJOY</p>
    <div class="cards">
      <ProgramCardVue class="card" :program="program[2]" />
    </div>
  </div>
</template>
  
  <script>
import ProgramCardVue from "../AboutMindful/ProgramCard.vue";
export default {
  name: "AboutRetreatProgramsVue",
  components: {
    ProgramCardVue,
  },
  data: function () {
    return {
      program: [
        {
          imgURL: require("@/assets/AboutRetreat/programs1.jpg"),
          title: "편안한 쉼을 즐길 수 있는 숙소",
          description1: [
            "기업 규모/문화/직무/예산에 맞는 적합한 객실을 고려해 다양한 지역의 숙박 장소를 추천드립니다.",
            "호텔, 리조트부터 펜션, 독채 풀빌라까지 원하는 대로 머물 수 있는 옵션을 선택하세요.",
          ],
        },
        {
          imgURL: require("@/assets/AboutRetreat/programs2.jpg"),
          title: "영감을 주는 업무 공간들",
          description1: [
            "언제든지 내가 일하고 싶을 때 편하게 일 할 수 있는 공간들을 제휴해서 제공하고 있습니다.",
            "빠른 와이파이가 갖춰진 새로운 업무 환경에서 어디서든 업무에 몰입을 해보세요.",
          ],
        },
        {
          imgURL: require("@/assets/AboutRetreat/programs1.jpg"),
          title: "새로운 경험과 모험",
          description1: [
            "로컬에서만 경험할 수 있는 액티비티, 다양한 네트워킹 이벤트 등 기억에 남는 차별화된 경험을 느껴보세요.",
            "많은 영감과 개인의 성장을 도울 수 있는 로컬과 사람간의 새로운 연결의 기회를 제공합니다.",
          ],
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.container {
  padding: 30px 0px 30px 0px;
  background-color: #fffef7;
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
</style>