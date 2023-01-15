<template>
  <div class="container">
    <p class="title">프로그램</p>
    <ProgramCard class="program-card" :cardData="cardData[0]"/>
    <ProgramCard class="program-card" :cardData="cardData[1]"/>
    <ProgramCard class="program-card" :cardData="cardData[2]"/>
    <ProgramCard class="program-card" :cardData="cardData[3]"/>
    <ProgramCard class="program-card" :cardData="cardData[4]"/>
    <p class="sub-info">지역 및 부대시설에 따라 프로그램은 변경될 수 있습니다</p>
  </div>
</template>
  
<script>
import ProgramCard from "./ProgramCard.vue";

export default {
  name: "ProgramYeongwolProgramsVue",
  components: {
    ProgramCard
  },
  data: function(){
    return {
      cardData: [
        {
          imageURL: require("@/assets/ProgramDetail/officeImage1.jpg"),
          semititle: "영월 가면 무조건 해봐야 하는 것!",
          title: "패러글라이딩",
          description: ["하늘을 날며, 추억을 남겨보세요.", "· 기본코스(10분 내외) : 초보자를 위한 기본코스 산들바람에 편안한 비행 (10만원)", "· 사전 예약제로 운영되기 때문에 예약금 입금이 필수입니다. (현장에서 지역화폐 결제 후 환급)", "· 자세한 사항은 액티비티 운영 업체에게 문의해주세요."]
        },
        {
          imageURL: require("@/assets/ProgramDetail/officeImage2.jpg"),
          semititle: "별을 보는 고요한 정상",
          title: "별마로 천문대",
          description: ["산꼭대기 천문대에서 보는 별빛 야경 감상", "도심에서 보기 힘든 밤하늘의 별과 영월의 야경을 보는 색다른 재미를 느껴보세요", "· 운영 시간 : 14:00~22:00 (월요일 휴관)", "· 사전 예약제로 운영되기 때문에 예약금 입금이 필수입니다. (현장에서 지역화폐 결제 후 환급)", "· 입장료 : 7,000원"]
        },
        {
          imageURL: require("@/assets/ProgramDetail/officeImage3.jpg"),
          semititle: "아트박물관",
          title: "젊은달 와이파크",
          description: ["생명의 근원인 빨강색을 이용해 무한한 우주의 공간을 담아놓은 곳, 이곳에서 공간 속 영감을 얻어가세요.", "다양한 현대미술관, 대지미술, 설치미술, 박물관과 공방이 합쳐진 복합예술공간입니다.", "· 운영 시간 : 09:00~18:00", "· 입장료 : 15,000원"]
        },
        {
          imageURL: require("@/assets/ProgramDetail/officeImage1.jpg"),
          semititle: "4억 년의 신비를 자랑하는 동굴",
          title: "고씨굴",
          description: ["천연기념물로 지정된 길이 약 6km의 동굴로서 폭포, 광장, 여러가지 종유석, 석순, 석주들이 조화롭게 어우러져 있어요.", "· 운영 시간 : 09:00~18:00", "· 입장료 : 4,000원"]
        },
        {
          imageURL: require("@/assets/ProgramDetail/officeImage1.jpg"),
          semititle: "다양한 즐길거리가 가득",
          title: "영월 와이스퀘어",
          description: ["알찬 콘텐츠가 가득한 공간으로 영상 및 전시, 카페 등이 있으며, 미디어 전시관에서는 조선민화를 테마로한 신비로운 디지털 영상을 관람 할 수 있습니다. ", "· 운영 시간 : 09:00~18:00 (월요일 휴무)", "· 입장료 : 10,000원"]
        }

      ]
    }
  }
};
</script>
  
  <style scoped>
.container {
  padding: 30px 0px 30px 0px;
}
.title {
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
}
.program-card {
  margin: 10px 0px 0px 0px;
}
.sub-info {
  margin: 30px 0px 0px 0px
}
</style>