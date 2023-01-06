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
  import MethodsCardVue from "../AboutMindful/MethodsCard.vue";
  export default {
    name: "AboutRetreatMethodsVue",
    components: {
      MethodsCardVue,
    },
    data: function () {
      return {
        cardInfos: [
          {
            num: "01",
            description1: "낯선 곳에서 새로운 경험, 그리고 빛나는 영감을 추구합니다",
            description2:
              "탁 트인 바다의 파도소리를 들으며 코딩을 하고, 숲 속의 맑은 공기를 마시며 새로운 프로젝트를 기획해보는 것은 어떨까요? 저녁에는 팀원들과 모닥불을 피우고 평소에는 하지 못했던 일과 인생에 대해 이야기 해보는 경험은 분명 우리에게 빛나는 영감으로 돌아올 거에요.",
          },
          {
            num: "02",
            description1: "사회적 위기를 함께 해결합니다",
            description2:
              "워크애니웨어는 멋진 자연과 볼거리가 있는 인구소멸지역을 위주로워케이션 서비스를 제공하고 있어요.유명한 관광지보다 숨겨진 보석 같은인구 소멸 지역의 여행지에서의 워케이션은 지역 경제에겐 활력을, 우리에겐 기쁨을 줄거에요.",
            description3: "* 워크애니웨어는 정부기관(기술보증기금)인증 '소셜벤처'인증 기업입니다."
          },
          {
            num: "03",
            description1: "기업 고객을 위한 최적의 워케이션 경험을 만들어 드립니다.",
            description2:
              "어디서 자야할지, 어디서 일해야할지, 뭘 먹어야할지 고민은 저희가 할게요. 워케이션하며 생기는 급한 상황도 현지에 있는 저희 크루가 도와드릴게요. 모처럼 찾아온 일과 휴식에 집중하세요.",
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