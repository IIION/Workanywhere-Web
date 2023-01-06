<template>
  <div class="type-container">
    <p class="type">TYPE OF WORKATION</p>

    <!-- 반응형일때는 -->
    <div class="type1">
      <img src="@/assets/Home/mindfull.png" class="card-image"/>
      <div class="texts">
        <p class="header">TYPE #1</p>
        <p class="card-subtitle">리더들을 위한</p>
        <p class="card-title">마인드풀 워케이션</p>
        <p class="card-description">
          서로에게 영감을 주는 리더들이 모여 여행지에서 새로운 라이프스타일을
          즐기고 일도 하면서 서로간의 의미있는 연결을 통해 재충전하는 프로그램
        </p>
        <p class="card-subdescription">
          내면탐색, 체형교정 테라피, 네트워킹, 인사이트 토크 등 다양한
          프로그램을 통해 일과 삶에 대한 영감과 훌륭한 인사이트를 얻을 수 있는
          기회를 만나보세요.
        </p>
        <button @click="moveToMindful">둘러보기</button>
      </div>
    </div>

    <div class="type2">
      <div class="texts">
        <p class="header">TYPE #2</p>
        <p class="card-subtitle">2-Weeks & 4-Weeks</p>
        <p class="card-title">애니웨어 리트릿</p>
        <p class="card-description">
          복잡한 도심을 떠나 일을 하고 싶은 리모트 워커들을 위한 원할때 쉬고, 원할때 일하는 자유로운 워케이션 프로그램
        </p>
        <p class="card-subdescription">
          낯선 곳에서 오전에는 집중적으로 업무를, 오후에는 서핑을 하는 것은 어때요? 
          찬란한 영감과 획기적인 아이디어는 쉬거나 놀 때 갑자기 나온다고 해요. 
          꽉 막힌 과제가 있다면, 팀 단위의 워케이션은 분명 기막힌 경험을 가져다 줄거예요. 
          자유로운 분위기 속에서 생기는 끈끈한 팀빌딩은 덤으로 가져가세요.
        </p>
        <button @click="moveToRetreat">둘러보기</button>
      </div>
      <img src="@/assets/Home/retlit.png" class="card-image"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutTypesVue",
  methods: {
    moveToMindful(){
      this.$router.push({name: "aboutmindful"})
    },
    moveToRetreat(){
      this.$router.push({name: "aboutretreat"})
    }
  }
};
</script>

<style scoped>
.type-container {
  background-color: #fffef6;
  padding: 79px 0px 79px 0px;
}

.type {
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 3rem;
  color: #ff4e31;
  margin: 0px 0px 77px 0px;
}

.type1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

.type1 > .texts {
  margin-left: 30px;
}
.type2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.type2 > .texts {
  margin-right: 30px;
}

.card-image {
  border-radius: 20px;
  width: 30%;
}

.texts {
  text-align: left;
  width: 30%;
}
.header {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 2rem;
  color: #ff4e31;
}

.card-subtitle {
  font-weight: 400;
  font-size: 2.5rem;
  margin: 0;
}

.card-title {
  font-weight: 700;
  font-size: 4rem;
  margin: 0;
}

.card-description {
  font-weight: 500;
  font-size: 2rem;
}

.card-subdescription {
  font-weight: 350;
  font-size: 2rem;
  color: #666666;
}

button {
  margin-top: 30px;
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
  background-color: #FF4E31;
  color: #FFFEF6;
}

</style>