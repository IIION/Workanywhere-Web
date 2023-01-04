<template>
  <div class="footer-container">
    <div class="footer-left">
      <img src="@/assets/logo.png" />
      <div class="co-info">
        <p style="margin-top: 20px">(주)워크애니웨어</p>
        <p>서울특별시 노원구 석계로 91, 2층 208호</p>
        <p>대표자: 최준호</p>
        <p>사업자 등록번호: 229-81-42783</p>
        <p style="font-weight: 500; margin-bottom: 20px">
          통신판매업신고번호: 2022-
        </p>
      </div>
      <p style="display: inline; font-weight: 700; margin-right: 20px">
        개인정보 처리방침
      </p>
      <p style="display: inline; font-weight: 700">이용 약관</p>
      <p style="font-weight: 500; margin-top: 20px">
        Copyright ⓒ 2022 WORKANYWHERE, All rights reserved.
      </p>
    </div>
    <div class="footer-contents">
      <div class="footer-center">
      <p style="font-weight: 700">워크애니웨어</p>
      <p>회사 소개</p>
      <p>도입 문의</p>
    </div>
    <div class="footer-right">
      <p style="font-weight: 700">채널</p>
      <p>인스타그램</p>
      <p>페이스북</p>
      <p>링크드인</p>
      <p>카카오톡</p>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
.footer-container {
  padding: 50px 0px 50px 0px;
  background-color: #f7f6f5;
  display: flex;
  justify-content: space-evenly;
}

img {
  width: 50px;
}

.footer-left {
  text-align: left;
}

.co-info > p {
  margin-top: 2px;
  margin-bottom: 0;
  font-weight: 400;
}

.footer-contents {
  display:flex;
}

.footer-center {
  margin: 0px 25px 0px 25px;
}

.footer-right {
  margin: 0px 25px 0px 25px;
}

p {
  color: #666666;
  margin-top: 2px;
}

@media screen and (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-left {
    min-width: 300px;
  }
  .footer-contents {
    flex-direction: column;
  }

  .footer-center {
    margin-top: 30px;
    text-align: left;
    min-width: 300px;
  }

  .footer-right {
    margin-top: 30px;
    text-align: left;
    min-width: 300px;
  }

  .footer-center > p:nth-child(2) {
    display: inline;
    margin-right: 10px;
  }
  .footer-center > p:nth-child(3) {
    display: inline;
  }
  .footer-right > p:nth-child(2) {
    display: inline;
    margin-right: 10px;
  }
  .footer-right > p:nth-child(3) {
    display: inline;
    margin-right: 10px;
  }
  .footer-right > p:nth-child(4) {
    display: inline;
    margin-right: 10px;
  }
  .footer-right > p:nth-child(5) {
    display: inline;
  }
  

}



</style>