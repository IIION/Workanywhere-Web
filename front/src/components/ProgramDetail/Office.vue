<template>
  <div class="container">
    <p class="title">오피스</p>
    <OfiiceCard
      :cardData="cardData[0]"
      class="card"
    />
    <OfiiceCard
      :cardData="cardData[1]"
      class="card"
    />
    <OfiiceCard
      :cardData="cardData[2]"
      class="card"
    />
  </div>
</template>

<script>
import OfiiceCard from './OfiiceCard.vue';
export default {
  name: "ProgramDetailOfficeVue",
  components: {
    OfiiceCard
  },
  data: function () {
    return {
      cardData: [
        {
          officeImg: require("@/assets/ProgramDetail/officeImage1.jpg"),
          officeName: "노마드 오피스",
          officeDescription: "넓고 조용한 분위기 속에서 업무에 몰입과 집중할 수 있는 공간",
          location: "체스터톤스 속초 A동 1층",
          time: "9:00 - 18:00",
          details: [
            {
              imgURL: require("@/assets/ProgramDetailIcons/wifi.png"),
              title: "초고속 WIFI"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/desk.png"),
              title: "책상"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/chair.png"),
              title: "의자"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/lounge.png"),
              title: "자유석"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/coffee.png"),
              title: "커피&간식"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/message.png"),
              title: "미팅룸"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/printer.png"),
              title: "프린팅"
            },
          ]
        },
        {
          officeImg: require("@/assets/ProgramDetail/officeImage2.jpg"),
          officeName: "펜트하우스",
          officeDescription: "동해와 청초호를 바라 보며 뻥 뚫린 뷰와 함께 일을 할 수 있는 워크애니웨어 고객 전용 거실이자 작업공간. 커피 한 잔을 하며 동료들과 친목을 다질 수도 있어요.",
          location: "체스터톤스 펜트하우스",
          time: "9:00 - 18:00",
          details: [
            {
              imgURL: require("@/assets/ProgramDetailIcons/wifi.png"),
              title: "초고속 WIFI"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/desk.png"),
              title: "책상"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/chair.png"),
              title: "의자"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/lounge.png"),
              title: "자유석"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/snacks.png"),
              title: "스낵바"
            },
          ]
        },
        {
          officeImg: require("@/assets/ProgramDetail/officeImage3.jpg"),
          officeName: "체스턴 책방",
          officeDescription: "오픈된 공간으로 적당한 소음 속에서 일을 하거나 독서를 즐길 수 있는 공간",
          location: "체스터톤스 중앙광장 지하 1층 / A동 1층",
          time: "24시간",
          details: [
            {
              imgURL: require("@/assets/ProgramDetailIcons/wifi.png"),
              title: "초고속 WIFI"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/desk.png"),
              title: "책상"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/chair.png"),
              title: "의자"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/lounge.png"),
              title: "자유석"
            },
            {
              imgURL: require("@/assets/ProgramDetailIcons/book.png"),
              title: "독서"
            },
          ]
        }

      ]
    }
  }
}
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