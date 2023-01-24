<template>
  <div>
    <div class="banner">
      <div class="banner-contents">
        <p class="infoTitle">
        서비스 소개서를 받기 위해 간단한 정보를 작성해주세요
        </p>
        <div class="logo-container">
          <img class="logoImg" src="@/assets/serviceLogo.png"/>
        </div>
        
      </div>
      <div class="closeButton" @click="closeServiceApply">𝗫</div>
    </div>

    <div class="submit-area">
      <!-- 회사명과 이름 -->
      <div class="two-input-container">
        <div class="input-container">
          <div class="category-container">
            <p class="category">회사명</p>
            <p class="starmark">*</p>
          </div>
          <input type="text" class="typing" placeholder="회사명을 입력해주세요" v-model="companyName">
        </div>
        <div class="input-container">
          <div class="category-container">
            <p class="category">이름</p>
            <p class="starmark">*</p>
          </div>
          <input type="text" class="typing" placeholder="이름을 입력해주세요" v-model="name">
        </div>
      </div>

      <!-- 직책, 이메일 -->
      <div class="two-input-container">
        <div class="input-container">
          <div class="category-container">
            <p class="category">직책</p>
            <p class="starmark">*</p>
          </div>
          <input type="text" class="typing" placeholder="직책을 입력주세요" v-model="position">
        </div>
        <div class="input-container">
          <div class="category-container">
            <p class="category">이메일</p>
            <p class="starmark">*</p>
          </div>
          <input type="text" class="typing" placeholder="workanywhere@workanywhere.kr" v-model="email">
        </div>
      </div>

      <!-- 연락처와 워크애니웨어 알게 된 경로 -->
      <div class="two-input-container">
        <div class="input-container">
          <div class="category-container">
            <p class="category">연락처</p>
            <p class="starmark">*</p>
          </div>
          <input type="text" class="typing" placeholder="-를 제외하고 입력해주세요 " v-model="phoneNumber" maxlength="11">
        </div>
        <div class="input-container">
          <div class="category-container">
            <p class="category">워크애니웨어를 어떻게 알게되셨나요?</p>
            <p class="starmark">*</p>
          </div>
          <!-- 경로 셀렉트 박스 -->
          <div class="how-select-container">
            <div
              class="selected"
              :class="{ open: showHowOption }"
              @click="showHowOptions"
            >
              {{ selectedHow }}
            </div>
            <div class="items" :class="{ selectHide: !showHowOption }">
              <div
                v-for="option of howOptions"
                :key="option.idx"
                @click="selectedOption(option)"
              >
                {{ option }}
              </div>
            </div>
          </div>


        </div>
      </div>
          <!-- 서비스 동의 -->
    <div class="clause">
      <div class="clause-container">
        <div class="clause-items">
          <input type="checkbox" id="select2">
          <label for="select2" :class="[checked1 === true ? 'checked' : 'non-checked']" @click="select1"></label>
          <div class="clause-texts">
            <a href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e">개인 정보 수집 및 이용</a>
            <p>에 동의합니다 (필수)</p>
          </div>
        </div>
      </div>
      <div class="clause-container">
        <div class="clause-items">
          <input type="checkbox" id="select3">
          <label for="select3" :class="[checked2 === true ? 'checked' : 'non-checked']" @click="select2"></label>
          <div class="clause-texts">
            <a href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e">워크애니웨어의 워케이션 소식 및 마케팅</a>
            <p>에 대한 정보수신을 동의합니다. (선택)</p>
          </div>
        </div>
      </div>
    </div>
     <!-- 누르면 메일 발송 -->
     <button class="submit-button" :class="[companyName && name && position && email && phoneNumber && selectedHow != '워크애니웨어를 알게되신 곳을 선택해주세요' && checked1 ? 'apply' : 'noapply']">소개서 받기</button>
    </div>



   

  </div>
</template>

<script>
export default {
  name: 'ServiceApplyModal',
  data: function (){
    return {
      companyName: "",
      name: "",
      position: "",
      email: "",
      phoneNumber: "",
      selectedHow: "워크애니웨어를 알게되신 곳을 선택해주세요",
      showHowOption: false,
      agreeTerm: false,
      howOptions: [
        "지인의 추천",
        "직군 커뮤니티를 통해 인지",
        "외부 광고",
        "SNS(인스타그램)",
        "기타"
      ],
      checked1: false,
      checked2: false
    }
  },
  methods: {
    closeServiceApply() {
      this.$emit('showServiceApply', false)
    },
    showHowOptions() {
      this.showHowOption = !this.showHowOption
    },
    selectedOption(option) {
      this.selectedHow = option
      this.showHowOption = !this.showHowOption
    },
    select1() {
      this.checked1 = !this.checked1
    },
    select2() {
      this.checked2 = !this.checked2
    },
  },
  watch: {
    phoneNumber: function() {
      return this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
    }
  },
}
</script>

<style scoped>
.banner {
  background-color: #ff4e31;
  height: 250px;
  width: 100%;
  position: relative;
  border-radius: 20px 20px 0px 0px;
}
.banner-contents {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 0px 30px;
}

.infoTitle {
  color: #fffbe3;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: left;
  width: 50%;
}
.logo-container {
  height: 100%;
  overflow:hidden;
}
.logoImg {
  object-fit: cover;
}

.closeButton {
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 10001;
  color: white;
  font-size: 2rem;
}
.submit-area {
  padding: 50px;
}
.two-input-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0px 10px 0px;
}
.input-container {
  width: 45%;
  display: flex;
  flex-direction: column;
}

.category-container {
  text-align: left;
}
.category-container > p {
  display: inline;
}
.category {
  font-size: 1.3rem;
  font-weight: 700;
}
.starmark {
  color: #FB1515;
  vertical-align: top;
  font-size: 1.3rem;
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

/* 셀렉트 박스 */
.how-select-container {
  margin: 10px 0px 10px 0px;
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}
.how-select-container .selected {
  background-color: white;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  color: #666666;
  padding: 10px 0px 10px 10px;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
}
.how-select-container .selected.open {
  border-radius: 10px 10px 0px 0px;
}
.how-select-container .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}
.how-select-container .items {
  font-size: 1.3rem;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 10011;
}
.how-select-container .items div {
  padding: 12px 10px 12px 10px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  user-select: none;
}
.selectHide {
  display: none;
}

/* 약관 동의 */
.clause input[type="checkbox"] {
  display: none;
}
.clause-container {
  margin-bottom: 5px;
}
.clause-items {
  display: flex;
  align-items: center;
}
.clause-texts {
  margin-left: 5px;
}
.clause-texts > a {
  font-size: 1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
}
.clause-texts > p {
  font-size: 1.2rem;
  display: inline;
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

.apply {
  padding: 13px 25px 13px 25px;
  background-color: #FF4E31;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.3rem;
  border-style: none;
  color: #FFFFFF;
  margin-top: 30px;
  cursor: pointer;
}

.noapply {
  padding: 13px 25px 13px 25px;
  background-color: #CACACA ;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.3rem;
  border-style: none;
  color: #666666;
  margin-top: 30px;
}

</style>