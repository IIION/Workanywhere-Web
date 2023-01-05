<template>
  <div class="container">
    <p class="title">지금 바로 떠날 수 있는 워케이션</p>
    <div class="cards">
      <WorkationCardVue
      class="card"
      :cardInfo="cardInfo[0]"
    />
    </div>
  </div>
</template>

<script>
import WorkationCardVue from './WorkationCard.vue';
export default {
  name:"WorkationProgramsVue",
  components: {
    WorkationCardVue
  },
  data: function() {
    return {
      cardInfo: [{
        imgURL: require("@/assets/AboutMindful/mindfulProgram.jpg"),
        locationAndDate: "속초 | 2박 3일",
        title: "리더들을 위한 마인드풀 워케이션",
        detailDate: "2022.12.14 - 12.16",
        points: ["C-레벨", "자기탐색", "바다뷰", "네트워킹"]
      }]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 30px 0px 30px 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  width: 50%;
  text-align: left;
  font-weight: 700;
  font-size: 2.5rem;
}
.cards {
  width: 50%;
  align-items: left;
}
.card {
  width: 300px;
}
</style>