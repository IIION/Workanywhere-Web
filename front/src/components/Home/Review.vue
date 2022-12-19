<template>
  <div class="container">
    <p class="title">워크애니웨어 고객 후기</p>
    <carousel :items="5" :autoplay="true" :nav="false" :dots="false">
      <div v-for="review in reviews" :key="review.id" class="review-cell">
        <ReviewDetailVue :review="review"/>
      </div>
    </carousel>
    <p class="go-review">더 많은 후기 보기 ></p>
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
      reviews: [
        {
          id: 0,
          title: "네이버 떨어진다아아",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "개발자",
          name: "류현선",
        },
        {
          id: 1,
          title: "잘생긴 로운이",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "PM",
          name: "이준영",
        },
        {
          id: 2,
          title: "아 졸려",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "개발자",
          name: "홍정민",
        },
        {
          id: 3,
          title: "못생긴 원혁이",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "개발자",
          name: "최원혁",
        },
        {
          id: 4,
          title: "세종은 매우 촌구석",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "디자이너",
          name: "김예훈",
        },
        {
          id: 5,
          title: "벼락아 제주도에 떨어져라",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "개발자",
          name: "김현수",
        },
        {
          id: 6,
          title: "로그인 기능 빨리 시작하자",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "개발자",
          name: "최인호",
        },
        {
          id: 7,
          title: "누구나 Refresh가 필요하다",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내...",
          job: "개발자",
          name: "류현선",
        },
        {
          id: 8,
          title: "지금 내가 Refresh가 필요하다",
          detail:
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
          job: "개발자",
          name: "류현선",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  background-color: #f7f6f5;
}

.title {
  font-weight: 700;
  font-size: 3rem;
  padding: 103px 0px 70px 0px;
  margin: 0;
}

.review-cell {
  margin: 0px 15px 0px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.02);
}

.go-review {
  padding: 50px 0px 103px 0px;
  font-weight: 500;
  color: #FF4E31;
  font-size: 1.5rem;
  margin:0;
}

</style>