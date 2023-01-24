<template>
  <div class="total-container">
    <p class="title">TYPE OF WORKATION</p>
    <p class="subtitle">다양한 타입의 워케이션을 즐겨보세요</p>
    <div class="card-container">
      <CardVue class="card"
        :cardInfo=cardInfo[0]
      />
      <CardVue class="card"
        :cardInfo=cardInfo[1]
      />
    </div>
    <button @click="moveToAbout">둘러보기</button>
  </div>
</template>

<script>
import CardVue from './Card.vue';

export default {
  name: 'TypeOfWorkationVue',
  components: {
    CardVue
  },
  data() {
    return {
      cardInfo: [
      { imgURL: require("@/assets/Home/mindfull.png"), semititle: '리더들을 위한', title: '마인드풀 워케이션', description: '서로에게 영감을 주는 리더들이 모여 여행지에서 새로운 라이프스타일을 즐기고 일도 하면서 서로간의 의미있는 연결을 통해 재충전하는 프로그램'},
      { imgURL: require("@/assets/Home/retlit.png"), semititle: '2-Weeks & 4-Weeks', title: '애니웨어 리트릿', description: '서로에게 영감을 주는 리더들이 모여 여행지에서 새로운 라이프스타일을 즐기고 일도 하면서 서로간의 의미있는 연결을 통해 재충전하는 프로그램'}
      ]
    } 
  },
  methods: {
    moveToAbout() {
      this.$router.push({name: "about"})
    }
  }
}
</script>

<style scoped>
.total-container {
  background-color: #F7F6F5;
  padding: 97px 15% 97px 15%;
}

.title {
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 500;
  color: #FF4E31;
}

.subtitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  margin: 0;
}

.card-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.card {
  margin: 57px 0px 57px 0px;
  width: 48%;
}

button {
  margin-left: 10px;
  margin-right: 10px;
  color: #FF4E31;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  padding: 12.5px 33.5px 12.5px 33.5px;
  border: 1.5px solid #FF4E31;
  border-radius : 50px;
  background-color: rgba( 255, 255, 255, 0);
  cursor: pointer;
}

button:hover {
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  padding: 12.5px 33.5px 12.5px 33.5px;
  border: 1.5px solid #FF4E31;
  border-radius : 50px;
  background-color: #FF4E31;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .total-container {
    background-color: #F7F6F5;
    padding: 97px 0px 97px 0px;
  }
  .card-container {
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .card {
    width: 100%;
    display: inline-block;
    margin-bottom: 0;
  }
  .card:nth-child(1) {
    margin-right: 16px;
  }
  button {
    margin-top: 30px;
  }
}

</style>