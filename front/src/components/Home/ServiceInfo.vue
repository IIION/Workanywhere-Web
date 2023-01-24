<template>
  <div class="info-container">
    <p class="subtitle">예약도, 관리도 편하게!</p>
    <p class="title">워크애니웨어 웹앱 서비스</p>
    <div class="container">
      <!-- 관리자용 -->
      <div class="role">
        <p class="role-text">관리자용</p>
      </div>

      <div class="segment">
        <button id="0" :class="[selection === '0' ? 'selected' : 'common']" @click="changeSelect($event)">
          한눈에 보는 이용 현황
        </button>
        <button id="1" :class="[selection === '1' ? 'selected' : 'common']" @click="changeSelect($event)">
          만족도 및 통계 데이터 관리
        </button>
      </div>

      <InfoCardVue :cardInfo="cardInfo[Number(selection)]" />

      <!-- 임직원용 -->
      <div class="role">
        <p class="role-text">임직원용</p>
      </div>
      <InfoCardVue :cardInfo="cardInfo[2]" />
    </div>
  </div>
</template>

<script>
import InfoCardVue from "./InfoCard.vue";

export default {
  name: "ServiceInfoVue",
  components: {
    InfoCardVue,
  },
  data() {
    return {
      cardInfo: [
        {
          imgURL: require("@/assets/Home/usagestatus.png"),
          title: "구성원들의 이용 현황을 한눈에",
          description1:
            "워케이션 중인 구성원들이 어떤 프로그램을 진행 중인지 실시간으로 간편하게 확인 할 수 있어요.",
          description2:
            "현재 무엇을 하고 있는지 일일이 물어보고, 보고할 필요가 없어요.",
        },
        {
          imgURL: require("@/assets/Home/datamanagement.png"),
          title: "직원들의 이용 통계 현황을 편하게 파악할 수 있어요",
          description1:
            "임직원들의 프로그램 이용률, 만족도, 부서별 이용횟수 등을 시각화된 리포트로 확인할 수 있어요.",
          description2:
            "대시보드를 통해 직원들의 이용 현황, 만족도, 일정, 예산 등을 추적하여 필요한 인사이트를 얻으실 수 있어요.",
        },
        {
          imgURL: require("@/assets/Home/calendar.png"),
          title: "프로그램 예약과 일정 관리를 간편하게",
          description1:
            "임직원들을 원하는 프로그램 예약을 직접 예약하여 일정을 편하게 관리할 수 있어요.",
          description2:
            "예약 후 알림 방송으로 바쁜 업무 도중에도 잊지 않고 참여할 수 있게 도와드려요",
        },
      ],
      selection: "0",
    };
  },
  methods: {
    changeSelect(event){
      const targetId = event.currentTarget.id
      this.selection = targetId
    }
  }
};
</script>

<style scoped>
.info-container {
  padding: 100px 15% 100px 15%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  color: #666666;
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0px 0px 8px 0px;
}

.title {
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0;
}

.role {
  background-color: #ff4e31;
  border-radius: 50px;
  margin-bottom: 40px;
  margin-top: 40px;
}
.role-text {
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  padding: 10px 15px 10px 15px;
  margin: 0;
}

.segment {
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  background-color: #F7F6F5;
  border-radius : 50px;
}

.segment button {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: normal;
  padding: 12.5px 33.5px 12.5px 33.5px;
  border: none;
  border-radius : 50px;
}
.selected {
  color: white;
  background-color: #FF4E31;
}

.common {
  color: #666666;
  background-color: #F7F6F5;
}
@media screen and (max-width: 768px) {
  .info-container {
    padding: 100px 0px 100px 0px;
  }
  .segment button {
    padding: 10px 20px 10px 20px;
  }
}
</style>