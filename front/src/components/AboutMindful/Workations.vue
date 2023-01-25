<template>
  <div class="container">
    <p class="title">지금 바로 떠날 수 있는 워케이션</p>
    <div class="cards">
      <div @click="moveToSokchoProgram">
        <WorkationCardVue class="card" :cardInfo="cardInfo[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import WorkationCardVue from "./WorkationCard.vue";
export default {
  name: "WorkationProgramsVue",
  components: {
    WorkationCardVue,
  },
  data: function () {
    return {
      cardInfo: [
        {
          imgURL: require("@/assets/AboutMindful/mindfulProgram.jpg"),
          locationAndDate: "속초 | 2박 3일",
          title: "리더들을 위한 마인드풀 워케이션",
          detailDate: "2022.12.14 - 12.16",
          points: ["C-레벨", "자기탐색", "바다뷰", "네트워킹"],
        },
      ],
    };
  },
  methods: {
    moveToSokchoProgram() {
      this.$router.push({ name: "programdetailsokcho" });
    },
  },
};
</script>

<style scoped>
.container {
  padding: 95px 15% 95px 15%;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: left;
  font-weight: 700;
  font-size: 2.2rem;
}
.cards {
  display: flex;
}
.card {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 50px 5% 50px 5%;
    display: flex;
    flex-direction: column;
  }
}
</style>