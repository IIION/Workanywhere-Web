<template>
  <div class="proposal-form-container">
    <!-- 신청 내역 -->
    <div class="proposal-info">
      <p class="title">신청 내역</p>
      <p class="period">{{ detailPeriod }}</p>
      <div>
        <p class="people">인원 : 성인 {{ adult }}</p>
        <p v-if="child" class="people">, 어린이 {{ child }}</p>
      </div>
      
      <hr noshade>
      <!-- 가격 -->
      <div class="price">
        <p>가격</p>
        <p>{{ 990000 * adult | currency }}원</p>
      </div>
    </div>

    <!-- 신청자 정보 -->
    <div class="applicant">
      <p class="title">신청자 정보</p>
      <div class="category-container">
        <p class="category">이름</p>
        <p class="starmark">*</p>
      </div>
      <input type="text" placeholder="이름" class="typing" v-model="name"/>

      <div class="category-container">
        <p class="category">회사/소속명</p>
        <p class="starmark">*</p>
      </div>
      <input type="text" placeholder="회사/소속명" class="typing" v-model="company"/>

      <div class="category-container">
        <p class="category">이메일</p>
        <p class="starmark">*</p>
      </div>
      <input type="text" placeholder="이메일" class="typing" v-model="email"/>

      <div class="category-container">
        <p class="category">휴대폰번호</p>
        <p class="starmark">*</p>
      </div>
      <input type="text" placeholder="‘-’빼고 입력" class="typing" v-model="phoneNumber" maxlength="11"/>

      <div class="category-container">
        <p class="category">성별</p>
        <p class="starmark">*</p>
      </div>

      <div class="sex">
        <button id="male" :class="[sex === '남성' ? 'selected' : 'common']" @click="selectSex">남성</button>
        <button id="femal" :class="[sex === '여성' ? 'selected' : 'common']" @click="selectSex">여성</button>
      </div>

      <!-- 약관 -->
      <div class="clause">
        <div class="clause-all">
          <input type="checkbox" id="all" name="전체동의" @click="allSelect()">
          <label for="all" :class="[checkedAll === true ? 'checked' : 'non-checked']"></label>
          <p>전체 동의하기</p>
        </div>
        <div class="clause-container">
          <div class="clause-items">
            <input type="checkbox" name="서비스약관" id="select1">
            <label for="select1" :class="[checked1 === true ? 'checked' : 'non-checked']" @click="select1"></label>
            <p>서비스 이용 약관에 동의합니다(필수)</p>
          </div>
          <a href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e" target="_blank">약관보기</a>
        </div>
        <div class="clause-container">
          <div class="clause-items">
            <input type="checkbox" name="이벤트" id="select2">
            <label for="select2" :class="[checked2 === true ? 'checked' : 'non-checked']" @click="select2"></label>
            <p>개인정보처리방침에 동의합니다(필수)</p>
          </div>
          <a href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e" target="_blank">약관보기</a>
        </div>
        <div class="clause-container">
          <div class="clause-items">
            <input type="checkbox" name="전체동의" id="select3">
            <label for="select3" :class="[checked3 === true ? 'checked' : 'non-checked']" @click="select3"></label>
            <p>이벤트 할인 혜택 알림 수신에 동의합니다(선택)</p>
          </div>
          <a href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e" target="_blank">약관보기</a>
        </div>
      </div>

      <!-- 신청하기 버튼, 위 필수 항목이 체워지지 않으면 비활성화 -->
      <button :class="[name && company && email && phoneNumber && sex && checked1 && checked2 ? 'apply' : 'noapply']" @click="moveToProposalDone">신청하기</button>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "ProposalFormCardVue",
  props: {
    detailPeriod: String,
    adult: Number,
    child: Number,
  },
  data: function() {
    return {
      price: "",
      name: "",
      company: "",
      email: "",
      phoneNumber: "",
      sex: "",
      checkedAll: false,
      checked1: false,
      checked2: false,
      checked3: false
    }
  },
  filters: {
    currency: function (value) {
      var num = new Number(value);
      return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  watch: {
    phoneNumber: function() {
      return this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
    }
  },
  methods: {
    selectSex(){
      const targetId = event.currentTarget.id
      if (targetId == "male") {
        this.sex = "남성"
      } else {
        this.sex = "여성"
      }
    },
    allSelect(){
      this.checkedAll = !this.checkedAll
      this.checked1 = this.checkedAll
      this.checked2 = this.checkedAll
      this.checked3 = this.checkedAll
    },
    select1() {
      this.checked1 = !this.checked1
    },
    select2() {
      this.checked2 = !this.checked2
    },
    select3() {
      this.checked3 = !this.checked3
    },
    moveToProposalDone() {
      if (this.name && this.company && this.email && this.phoneNumber && this.sex && this.checked1 && this.checked2) {
        this.$router.push({name: "proposaldone", params: { programName:"리더들을 위한 마인드풀 워케이션", region:"속초",option: "12월 14일~16일(2박 3일)", price:990000,adult: this.adult, child: this.child, name:this.name, company: this.company, email: this.email, phoneNumber:this.phoneNumber, sex:this.sex}})
      }
    }
  }
};
</script>
    
<style scoped>
.proposal-form-container {
  text-align: left;
}
.title {
  font-size: 2rem;
  font-weight: 500;
  color: #191919;
  margin-top: 0;
}
.period {
  font-size: 1.3rem;
}
.people {
  font-size: 1.3rem;
  display: inline;
}
.price {
  display: flex;
  justify-content: space-between;
}
.price > p {
  font-size: 1.3rem;
  font-weight: 700;
}

.applicant {
  margin-top: 30px;
}

hr {
  border: 0;
  background-color: #B1B1B1;
  /* border-color: #B1B1B1; */
  height: 1px;
  margin: 20px 0px 10px 0px;
}

.category-container > p {
  display: inline;
}
.category {
  font-size: 1.3rem;
  font-weight: 500;
}
.starmark {
  color: #FB1515;
  vertical-align: top;
}
.typing {
  margin: 10px 0px 10px 0px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  padding-left: 10px;
  box-sizing: border-box;
}
.typing:focus {
  outline: none;
}
.sex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.common {
  width: 48%;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  background-color: white;
  color: #666666;
}
.selected {
  width: 48%;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  background-color: #FF4E31;
  color: white;
  font-weight: 700;
}
.clause input[type="checkbox"] {
  display: none;
}

.non-checked {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #CACACA;
  border-radius: 100px;
  position: relative;
  background: #FCFCFC;
  cursor: pointer;
}

.checked{
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #FF4E31;
  border-radius: 100px;
  position: relative;
  background: #FF4E31;
  box-shadow: 0 0 0 2px white inset;
  cursor: pointer;
}
.clause-all {
  display: flex;
  align-items: center;
}
.clause-all > p {
  margin-left: 5px;
  font-size: 1.1rem;
  font-weight: 500;
}

.clause-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.clause-container > a {
  border: 0.5px solid #B1B1B1;
  border-radius: 5px;
  padding: 3px 3px 3px 3px;
  text-decoration: none;
  color: #B1B1B1;
}
.clause-items {
  display: flex;
  align-items: center;
}
.clause-items > p {
  margin: 0px 0px 0px 5px;
  font-size: 1rem;
  color: #666666;
}
.apply {
  width: 100%;
  height: 40px;
  margin: 50px 0px 0px 0px;
  border-radius: 10px;
  border: 0px;
  background-color: #FF4E31;
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.noapply {
  width: 100%;
  height: 40px;
  margin: 50px 0px 0px 0px;
  border-radius: 10px;
  border: 0px;
  background-color: #CACACA ;
  color: #666666;
  font-weight: 700;
}
</style>