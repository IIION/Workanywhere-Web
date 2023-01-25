<template>
    <div class="container">
      <p class="title">지금 바로 떠날 수 있는 워케이션</p>
      <div class="cards">
        <div @click="moveToYeongwolProgram">
          <WorkationCardVue
        class="card"
        :cardInfo="cardInfo[0]"
        />
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  import WorkationCardVue from '../AboutMindful/WorkationCard.vue';
  export default {
    name:"AboutRetreatWorkationProgramsVue",
    components: {
      WorkationCardVue
    },
    data: function() {
      return {
        cardInfo: [{
          imgURL: require("@/assets/AboutRetreat/retreatProgram.jpg"),
          locationAndDate: "영월 | 2주",
          title: "천천히 영월",
          detailDate: "2022.11.25 - 12.31",
          points: ["임직원", "패러글라이딩", "별빛야경", "산속뷰"]
        }]
      }
    },
    methods: {
      moveToYeongwolProgram() {
        this.$router.push({name: "programdetailyeongwol"})
      }
    }
  }
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