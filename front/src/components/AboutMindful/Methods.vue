<template>
  <div class="container">
    <p class="subtitle">더 특별한 워케이션을 만드는</p>
    <p class="title">워크애니웨어만의 3가지 방식</p>
    <div class="cards">
      <MethodsCardVue class="card" :cardInfo="cardInfos[0]" />
      <MethodsCardVue class="card" :cardInfo="cardInfos[1]" />
      <MethodsCardVue class="card" :cardInfo="cardInfos[2]" />
    </div>
  </div>
</template>

<script>
import MethodsCardVue from "./MethodsCard.vue";
export default {
  name: "MethodsVue",
  components: {
    MethodsCardVue,
  },
  data: function () {
    return {
      cardInfos: [
        {
          num: "01",
          description1: "이름, 나이, 지위는 잠깐 내려 놓아요",
          description2:
            "우리 모두는 나이, 성별, 지위와 관계없이 동등한 존재예요. 그래서 현재의 이름이 아닌 새로운 이름을 사용해요. 이곳에서는 서로를 존중하며 평등하게 대화하며 교류해요.",
        },
        {
          num: "02",
          description1: "각 분야 최고의 전문가가 만든 프로그램",
          description2:
            "표준화 불가한 국내 유일 자기객관화 내면 탐색 프로그램, 전문 도수치료사의 교정 테라피, 현업 HR 전문가의 인사이트 토크 등 국내 최고의 전문가들과 함께 만들고 직접 운영해요.",
        },
        {
          num: "03",
          description1: "모든 일정은 자유롭게 선택하세요",
          description2:
            "정해진 틀 안에서 움직이는 프로그램은 최대한 지양해요. 온전히 일에 집중해도 되고, 휴식에만 집중해도 좋아요. 저희는 최고의 워케이션 경험이 남을 수 있게 최선을 다해 도울게요.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 30px 0px 50px 0px;
}
.subtitle {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
}
.title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ff4e31;
  margin: 0px 0px 60px 0px;
}

.cards {
  display: flex;
  justify-content: center;
}
.card {
  width: 20%;
}

.card:nth-child(2) {
  margin: 0px 47px 0px 47px;
}
</style>