<template>
  <div class="container">
    <p class="title">오피스</p>
    <OfficeCard :cardData="cardData[0]" class="card" />
    <OfficeCard :cardData="cardData[1]" class="card" />
  </div>
</template>
  
<script>
import OfficeCard from "./OfficeCard.vue";
export default {
  name: "ProgramYeongwolOfficeVue",
  components: {
    OfficeCard,
  },
  data: function () {
    return {
      cardData: [
        {
          officeImg: require("@/assets/ProgramDetail/officeImage1.jpg"),
          officeName: "워케이션 센터",
          officeDescription:
            "리조트 내 위치한 워케이션 고객 전용 업무 공간으로, 넓고 조용한 분위기 속에서 업무에 몰입과 집중할 수 있는 공간",
          location: "동강시스타 리조트 내 위치",
          time: "9:00 - 18:00",
          details: [
            {
              imgURL: require("@/assets/ProgramDetailIcons/wifi2.png"),
              title: "초고속 WIFI",
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/desk.png"),
              title: "책상",
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/chair.png"),
              title: "의자",
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/printer.png"),
              title: "프린팅",
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/lounge.png"),
              title: "자유석",
            },
          ],
        },
        {
          officeImg: require("@/assets/ProgramDetail/officeImage2.jpg"),
          officeName: "포레스트 카페",
          officeDescription:
            "레스토랑 겸 카페 공간으로 오픈된 공간으로 적당한 소음 속에서 일을 할 수 있는 공간",
          location: "동강시스타 리조트 내 위치",
          time: "9:00 - 18:00",
          details: [
            {
              imgURL: require("@/assets/ProgramDetailIcons/wifi2.png"),
              title: "초고속 WIFI",
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/desk.png"),
              title: "책상",
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/chair.png"),
              title: "의자",
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/lounge.png"),
              title: "자유석",
            },
          ],
        }
      ],
    };
  },
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
.card {
  margin-top: 15px;
}
</style>