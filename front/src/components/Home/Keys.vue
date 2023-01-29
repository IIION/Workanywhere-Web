<template>
  <div class="keys-container">
    <p>워케이션은 모든 기업에게 필요합니다</p>
    <div class="cards">
      <KeyCardVue
        class="card"
        :cardInfo=cardInfo[0]
      />
      <KeyCardVue
      class="card"
        :cardInfo=cardInfo[1]
      />
      <KeyCardVue
      class="card"
        :cardInfo=cardInfo[2]
      />
    </div>
  </div>
</template>

<script>
import KeyCardVue from "./KeyCard.vue";
export default {
  name: "KeysVue",
  components: {
    KeyCardVue
  },
  data: function () {
    return {
      cardInfo: [
        {
          imgURL: require("@/assets/Home/keys1.png"),
          title: "일에 지쳐 번아웃으로 직원들에게 리프레시를 제공하고 싶은 조직",
          description: "워케이션을 통해 심신의 회복을 찾은 직원들은 직무 역량 뿐 아니라 조직 생산성을 향상 시킬 수 있습니다."
        },
        {
          imgURL: require("@/assets/Home/keys2.png"),
          title: "팀빌딩을 통해 조직 문화를 성장시키고 싶은 조직",
          description: "자유로운 분위기 속에서 신입사원들의 온보딩 프로그램, 다채로운 팀빌딩으로 팀워크를 다져 나갈 수 있습니다."
        },
        {
          imgURL: require("@/assets/Home/keys3.png"),
          title: "새로운 배움과 리프레시가 필요한 조직",
          description: "대표 및 팀 리더들은 조직 밖 다양한 사람들과의 네트워킹과 정보공유를 통해 소통하고 성장할 수 있습니다."
        },
      ],
    };
  },
};
</script>

<style scoped>
.keys-container {
  padding: 100px 0px 100px 0px;
}
p {
  font-weight: 700;
  font-size: 2.5rem;
}

.cards {
  display: flex;
  justify-content: center;
}

.card {
  width: 19%;
  padding: 50px 36px 20px 36px;
}

@media screen and (max-width: 768px) {
  .keys-container {
    padding: 50px 0px 50px 0px;
  }
  .cards {
    display: block;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .card {
    display: inline-block;
    width: 100%;
    padding: 50px 0px 50px 0px;
  }
} 
</style>