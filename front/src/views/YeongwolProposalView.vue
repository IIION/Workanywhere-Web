<template>
  <div>
    <div class="container">
      <div class="header">
        <p @click="$router.go(-1)">＜</p>
        <p>신청하기</p>
      </div>
      <div class="contents">
        <!-- 카드와 안심 예약 문구가 들어갈 공간 -->
        <div class="left-container">
          <ProgramCard :cardInfo="cardInfo[0]" />
          <div class="guide">
            <p>안심하고 예약하세요</p>
            <p>
              신청서를 제출하면 워크애니웨어에서 24시간 이내에 연락을
              드릴거예요.
            </p>
          </div>
        </div>
        <!-- 신청 내역이 들어갈 공간 -->
        <div class="right-container">
          <ProposalFormCard
            :adult="adult"
            :child="child"
            :detailPeriod="detailPeriod"
            :price="standardPrice"
          />
        </div>
      </div>
    </div>

    <!-- 이 페이지만의 푸터 -->
    <div class="foot">
      <img src="@/assets/logo.png" />
    </div>
  </div>
</template>
  
<script>
import ProgramCard from "@/components/YeongwolProposal/ProgramCard.vue";
import ProposalFormCard from "@/components/SokchoProposal/ProposalFormCard.vue";
export default {
  name: "YeongwolProposalView",
  props: {
    adult: {
      type: Number,
      default: 1,
    },
    child: {
      type: Number,
      default: 1,
    },
    period: {
      type: String,
      default: "2주",
    },
    time: {
      type: String,
      default: "2022.11.25 - 12.31",
    },
    detailPeriod: {
      type: String,
      default: "11월 25일~12.31(2주)",
    },
    standardPrice: {
      type: Number,
      default: 400000,
    }
  },
  components: {
    ProgramCard,
    ProposalFormCard,
  },
  data: function () {
    return {
      cardInfo: [
        {
          imgURL: require("@/assets/AboutRetreat/retreatProgram.jpg"),
          locationAndDate: "속초 | " + this.period,
          title: "천천히 영월",
          detailDate: this.time,
          points: ["임직원", "패러글라이딩", "별빛야경", "산속뷰"],
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0)
  }
};
</script>
  
<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 15%;
  margin-right: 15%;
}
.header {
  text-align: left;
  margin: 30px 0px 30px 0px;
}
.header > p {
  display: inline;
  font-weight: 700;
  font-size: 2rem;
}
.header > p:nth-child(1) {
  margin-right: 30px;
  cursor: pointer;
}
.contents {
  display: flex;
  justify-content: space-between;
}
.left-container {
  width: 48%;
}
.right-container {
  width: 48%;
}
.guide {
  text-align: left;
  margin-top: 50px;
}
.guide > p:nth-child(1) {
  font-weight: 700;
  font-size: 2rem;
}
.guide > p:nth-child(2) {
  color: #666666;
  font-size: 1.2rem;
}
.foot {
  padding: 50px;
  background-color: #f7f6f5;
}
.foot > img {
  width: 50px;
}
</style>