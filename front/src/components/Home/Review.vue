<template>
  <div class="container">
    <p class="title">워크애니웨어 고객 후기</p>
    <carousel :items="3" :autoplay="true" :nav="false" :dots="false" class="desktop-carousel">
      <div v-for="review in reviews" :key="review.id" class="review-cell">
        <ReviewDetailVue :review="review"/>
      </div>
    </carousel>
    <carousel :items="1" :autoplay="true" :nav="false" :dots="false" class="mobile-carousel">
      <div v-for="review in reviews" :key="review.id" class="review-cell">
        <ReviewDetailVue :review="review"/>
      </div>
    </carousel>
    <p class="go-review" @click="moveToBlog">더 많은 후기 보기 ></p>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import ReviewDetailVue from "./ReviewDetail.vue";

export default {
  name: "ReviewVue",
  components: {
    carousel,
    ReviewDetailVue,
  },
  data: function () {
    return {
      wideMode: true,
      reviews: [
        {
          id: 0,
          title: "퀄리티 높은 프로그램, 만족스러운 경험",
          detail:
            "다녀와서도 여운이 오래가는 행복한 여행의 추억과, 설레는 비지니스의 시작이 동시에 느껴지네요. 이건 워케이션을 통해서만 느낄 수 있는 훌륭한 점이라고 생각해 주변 지인들에게도 강력 추천하고 있습니다 :) 워크애니웨어팀께 얼마나 심혈을 기울여 하나하나 기획 했을지 정성들이 느껴진 프로그램들 이었습니다. 그만큼 퀄리티가 매우 높았고, 만족스럽지 않은 과정 하나가 없었습니다. ",
          job: "스타트업 대표",
          name: "최**",
        },
        {
          id: 1,
          title: "‘찐’ 워케이션을 경험할 수 있었던 시간",
          detail:
            "필드에서 선두를 달리고 계시는 사업가 분들과 함께 모여 인사이트도 나누고 워크애니웨어에서 제공해주신 최상의 서비스를 누렸습니다. 일하는 시간을 제외한 나머지 시간에 명상과 내면탐색, 맛집 탐방, 독서, 조직문화 강연, 네트워킹 파티 등 고퀄리티 스케줄이 행복한 2박 3일을 만들어 준 것 같습니다. 일과 휴식, 그리고 결이 맞는 사람들과 함께하는 시간을 원하시는 분들께 꼭 추천드립니다! ",
          job: "디자이너",
          name: "최**",
        },
        {
          id: 2,
          title: "돈 주고도 얻을 수 없는 경험담과 통찰력!",
          detail:
            "속초에서의 2박 3일 워케이션. 돈 주고도 얻을 수 없는 경험담과 통찰력. 사업은 이렇게 해야하는구나의 깨달음. 긍정의 에너지, 파워풀한 텐션과 추진력! 역시 세상은 넓고 뛰어난 사람은 많은 것 같습니다.",
          job: "스튜디오 PD",
          name: "이**",
        },
        {
          id: 3,
          title: "나 자신을 챙길 수 있었던 완벽한 시간",
          detail:
            "워케이션이라는 값진 경험을 해볼 수 있어서 정말 행복합니다. 다양한 프로그램들을 통해 새로운 인사이트를 얻을 수 있었고, 비지니스에도 좋은 영향이 많았습니다. 창업을 시작하며 나 자신을 챙길 시간이 항상 부족했는데, 워케이션으로 내면과 사업 두마리 토끼를 잡을 수 있는 완벽한 시간이었다 생각합니다. ",
          job: "스타트업 대표",
          name: "김**",
        },
        {
          id: 4,
          title: "숨은 진주를 발견한 기분이예요",
          detail:
            "워케이션 오기 전에는 영월에 대해 잘 몰랐는데 숨은 진주를 발견한 기분이예요. 오랜만에 혼자서 사색하는 시간을 가지고 새로운 곳에서 일을 하니 집중도도 올라가서 좋았습니다.",
          job: "개발자",
          name: "최**",
        },
      ],
    };
  },
  methods: {
    moveToBlog() {
      window.open('https://blog.naver.com/PostList.naver?blogId=workanywhere&from=postList&categoryNo=9','_blank')
    }
  },
  created() {
    if (window.innerWidth > 768) {
        this.wideMode = true
      } else {
        this.wideMode = false
      }
  }
};
</script>

<style scoped>
.container {
  padding: 100px 0px 100px 0px;
  background-color: #f7f6f5;
}

.title {
  font-weight: 700;
  font-size: 2.5rem;
  padding-bottom: 70px;
  margin: 0;
}

.review-cell {
  margin: 0px 15px 0px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.02);
}

.go-review {
  padding: 50px 0px 0px 0px;
  font-weight: 500;
  color: #FF4E31;
  font-size: 1.5rem;
  margin:0;
}
.desktop-carousel {
    display: block;
  }
.mobile-carousel {
  display: none;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 50px 0px 50px 0px;
    background-color: #f7f6f5;
  }
  .mobile-carousel {
    display: block;
  }
  .desktop-carousel {
    display: none;
  }
}
</style>