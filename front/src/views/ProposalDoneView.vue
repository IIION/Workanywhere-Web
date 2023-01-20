<template>
  <div>
    <!-- 신청 완료 배너 width 100%-->
    <div class="banner">
      <p>신청이 완료되었습니다</p> 
      <img src="@/assets/logo2.png" class="logo">
    </div>

    <div class="middle-area">
      <!-- 중간 3개 카드 -->
      <div class="cards">
        <div class="card">
          <p>신청완료</p>
          <p>신청 정보 입력 후 신청 완료</p>
        </div>
        <p>＞</p>
        <div class="card">
          <p>신청 확인 및 결제</p>
          <p>회사 관리자 및 워크애니웨어팀 신청 내역 확인 및 결제</p>
        </div>
        <p>＞</p>
        <div class="card">
          <p>확정 내역 발송</p>
          <p>신청 확정 및 내역 카카오톡 또는 SMS 발송</p>
        </div>
      </div>
      <!-- 신청 내역 -->
      <div class="proposal-history">
        <p class="title">신청 내역</p>
        <div class="info">
          <div class="first-cell">
            <p>신청 프로그램</p>
            <p>{{ programName }}</p>
          </div>
          <div>
            <p>지역</p>
            <p>{{ region }}</p>
          </div>
          <div>
            <p>신청 옵션</p>
            <p>{{ option }}</p>
          </div>
          <div>
            <p>인원</p>
            <div>
              <p class="people">성인 {{ adult }}</p>
              <p v-if="child" class="people">, 어린이 {{ child }}</p>
            </div>
          </div>
          <div class="last-cell">
            <p>금액</p>
            <p>{{ price * adult | currency }}원</p>
          </div>
        </div>
      </div>
      
      <hr noshade>
      <!-- 신청자 정보 -->
      <div class="user-info">
        <p class="title">신청자 정보</p>
        <div class="info">
          <div>
            <p class="first-cell">이름</p>
            <p>{{ name }}</p>
          </div>
          <div>
            <p>회사/소속명</p>
            <p>{{ company }}</p>
          </div>
          <div>
            <p>이메일</p>
            <p>{{ email }}</p>
          </div>
          <div>
            <p>휴대폰번호</p>
            <p>{{ phoneNumber }}</p>
          </div>
          <div>
            <p class="last-cell">성별</p>
            <p>{{ sex }}</p>
          </div>
        </div>
      </div>


    </div>
    <FooterVue/>
  </div>
</template>

<script>
import FooterVue from '@/components/Footer.vue';
export default {
  name: "ProposalDoneView",
  components: {
    FooterVue
  },
  props: {
    programName: {
      type: String,
      default: ""
    },
    region: {
      type:String,
      default: ""
    },
    option: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
    },
    adult: {
      type: Number,
      default: 0,
    },
    child: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: ""
    },
    company: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    phoneNumber: {
      type: String,
      default: ""
    },
    sex: {
      type: String,
      default: ""
    },
  },
  filters: {
    currency: function (value) {
      var num = new Number(value);
      return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  created(){
    console.log(this.adult)
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  padding: 50px 0px 50px 0px;
  background-color: #FF4E31;
}
.banner > p {
  color: #FFFBE3;
  font-weight: 700;
  font-size: 2.5rem;
}
.logo {
  width: 50px;
}
.middle-area {
  margin-left: 15%;
  margin-right: 15%;
  padding: 30px 0px 30px 0px;
}

.cards {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
}
.cards > p{
  font-weight: 500;
  font-size: 30px;
}
.card {
  background-color: #F7F6F5;
  border: 1px solid #D9D9D9;
  border-radius: 19.2496px;
  padding: 30px;
  width: 22%;
}
.first-cell p {
  text-align: left;
}
.last-cell p {
  text-align: right;
}
.card > p:nth-child(1) {
  font-weight: 700;
  font-size: 2rem;
}
.card > p:nth-child(2) {
  font-size: 1.3rem;
  min-height: 50px;
  color: #666666;
}
.people {
  font-size: 1.3rem;
  display: inline;
}
.proposal-history {
  margin: 10px 0px 30px 0px;
}
.title {
  font-weight: 500;
  font-size: 2.3rem;
  text-align: left;
}
.info {
  display: flex;
  justify-content: space-between;
}
.info > div > p:nth-child(1) {
  font-size: 1.3rem;
  color: #B1B1B1;
}

.info > div > p:nth-child(2) {
  font-size: 1.3rem;
}

hr {
  border: 0;
  background-color: #B1B1B1;
  /* border-color: #B1B1B1; */
  height: 1px;
  margin: 20px 0px 20px 0px;
}

</style>