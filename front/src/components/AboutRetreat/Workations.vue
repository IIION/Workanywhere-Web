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