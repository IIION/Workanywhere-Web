<template>
  <div>
    <!-- 신청 완료 배너 width 100%-->
    <div class="banner">
      <p>신청이 완료되었습니다.</p> 
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
          <div>
            <p class="first-cell">신청 프로그램</p>
            <p>리더들을 위한 마인드풀 워케이션</p>
          </div>
          <div>
            <p>지역</p>
            <p>속초</p>
          </div>
          <div>
            <p>신청 옵션</p>
            <p>12월 14일~16일(2박 3일)</p>
          </div>
          <div>
            <p>인원</p>
            <p>성인 1</p>
          </div>
          <div>
            <p class="last-cell">금액</p>
            <p>990,000원</p>
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
            <p>홍길동</p>
          </div>
          <div>
            <p>회사/소속명</p>
            <p>워크애니웨어</p>
          </div>
          <div>
            <p>이메일</p>
            <p>abc@workanywhere.kr</p>
          </div>
          <div>
            <p>휴대폰번호</p>
            <p>01012345678</p>
          </div>
          <div>
            <p class="last-cell">성별</p>
            <p>여성</p>
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
.first-cell {
  text-align: left;
}
.last-cell {
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