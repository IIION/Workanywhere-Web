<template>
  <div class="modal-container">
    <div class="banner">
      <div class="texts">
        <p class="infoTitle">워케이션 컨설팅</p>
        <p class="infoTitle">문의하기</p>
      </div>
      
      <div class="logo-container">
        <img class="logoImg" src="@/assets/logo2.png" />
      </div>
      <div class="closeButton" @click="closeConsulting">𝗫</div>
    </div>

    <div class="submit-area">
      <!-- 회사명과 이름 -->
      <div class="two-input-container">
        <div class="input-container">
          <div class="category-container">
            <p class="category">회사명</p>
            <p class="starmark">*</p>
          </div>
          <input
            type="text"
            class="typing"
            placeholder="회사명을 입력해주세요"
            v-model="companyName"
          />
        </div>
        <div class="input-container">
          <div class="category-container">
            <p class="category">이름</p>
            <p class="starmark">*</p>
          </div>
          <input
            type="text"
            class="typing"
            placeholder="이름을 입력해주세요"
            v-model="name"
          />
        </div>
      </div>

      <!-- 직책, 이메일 -->
      <div class="two-input-container">
        <div class="input-container">
          <div class="category-container">
            <p class="category">직책</p>
            <p class="starmark">*</p>
          </div>
          <input
            type="text"
            class="typing"
            placeholder="직책을 입력주세요"
            v-model="position"
          />
        </div>
        <div class="input-container">
          <div class="category-container">
            <p class="category">이메일</p>
            <p class="starmark">*</p>
          </div>
          <input
            type="text"
            class="typing"
            placeholder="workanywhere@workanywhere.kr"
            v-model="email"
          />
        </div>
      </div>

      <!-- 연락처와 워크애니웨어 알게 된 경로 -->
      <div class="two-input-container">
        <div class="input-container">
          <div class="category-container">
            <p class="category">연락처</p>
            <p class="starmark">*</p>
          </div>
          <input
            type="text"
            class="typing"
            placeholder="-를 제외하고 입력해주세요 "
            v-model="phoneNumber"
            maxlength="11"
          />
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

      <div class="two-input-container">
        <div class="input-container">
          <div class="category-container">
            <p class="category">근무 형태</p>
            <p class="starmark">*</p>
          </div>
          <div class="how-select-container">
            <div
              class="selected"
              :class="{ open: showFormOfWork }"
              @click="showFormOfWorks"
            >
              {{ selectedFormOfwork }}
            </div>
            <div class="items" :class="{ selectHide: !showFormOfWork }">
              <div
                v-for="option of formOfWorkOptions"
                :key="option.idx"
                @click="selectedFormOfWorksOption(option)"
              >
                {{ option }}
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <div class="category-container">
            <p class="category">기업 인원 수</p>
            <p class="starmark">*</p>
          </div>
          <!-- 경로 셀렉트 박스 -->
          <div class="how-select-container">
            <div
              class="selected"
              :class="{ open: showCountWorker }"
              @click="showCountWorkers"
            >
              {{ selectedCountWorker }}
            </div>
            <div class="items" :class="{ selectHide: !showCountWorker }">
              <div
                v-for="option of counterWorkerOptions"
                :key="option.idx"
                @click="selectedCountWorkerOption(option)"
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
            <input type="checkbox" id="select2" />
            <label
              for="select2"
              :class="[checked1 === true ? 'checked' : 'non-checked']"
              @click="select1"
            ></label>
            <div class="clause-texts">
              <a
                href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e"
                >개인 정보 수집 및 이용</a
              >
              <p>에 동의합니다 (필수)</p>
            </div>
          </div>
        </div>
        <div class="clause-container">
          <div class="clause-items">
            <input type="checkbox" id="select3" />
            <label
              for="select3"
              :class="[checked2 === true ? 'checked' : 'non-checked']"
              @click="select2"
            ></label>
            <div class="clause-texts">
              <a
                href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e"
                >워크애니웨어의 워케이션 소식 및 마케팅</a
              >
              <p>에 대한 정보수신을 동의합니다. (선택)</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 누르면 메일 발송 -->
      <button
        class="submit-button"
        :class="[
          companyName &&
          name &&
          position &&
          email &&
          phoneNumber &&
          selectedHow != '워크애니웨어를 알게되신 곳을 선택해주세요' &&
          selectedCountWorker != '현재 회사의 근무 형태를 선택해주세요' && 
          selectedFormOfwork != '기업 인원 수를 선택해주세요' &&
          checked1
            ? 'apply'
            : 'noapply',
        ]"
      >
        소개서 받기
      </button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ConsultingModal",
  data: function () {
    return {
      companyName: "",
      name: "",
      position: "",
      email: "",
      phoneNumber: "",
      selectedHow: "워크애니웨어를 알게되신 곳을 선택해주세요",
      selectedFormOfwork: "현재 회사의 근무 형태를 선택해주세요",
      selectedCountWorker: "기업 인원 수를 선택해주세요",
      showHowOption: false,
      showFormOfWork: false,
      showCountWorker: false,

      howOptions: [
        "지인의 추천",
        "직군 커뮤니티를 통해 인지",
        "외부 광고",
        "SNS(인스타그램)",
        "기타",
      ],
      formOfWorkOptions: [
        "전원 출근제",
        "자율 원격 근무",
        "하이브리드 근무",
        "일부 직무 재택/원격근무",
        "기타",
      ],
      counterWorkerOptions: [
        "10인 미만",
        "10~50인",
        "50~100인",
        "100~200인",
        "200인 이상"
      ],
      checked1: false,
      checked2: false,
    };
  },
  methods: {
    closeConsulting() {
      this.$emit("showConsulting", false);
    },
    showHowOptions() {
      this.showHowOption = !this.showHowOption;
    },
    showFormOfWorks() {
      this.showFormOfWork = !this.showFormOfWork
    },
    showCountWorkers() {
      this.showCountWorker = !this.showCountWorker
    },
    selectedOption(option) {
      this.selectedHow = option;
      this.showHowOption = !this.showHowOption;
    },
    selectedFormOfWorksOption(option) {
      this.selectedFormOfwork = option;
      this.showFormOfWork = !this.showFormOfWork
    },
    selectedCountWorkerOption(option) {
      this.selectedCountWorker = option;
      this.showCountWorker = !this.showCountWorker
    },
    select1() {
      this.checked1 = !this.checked1;
    },
    select2() {
      this.checked2 = !this.checked2;
    },
  },
  watch: {
    phoneNumber: function () {
      return (this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, ""));
    },
  },
};
</script>
  
<style scoped>

.banner {
  background-color: #ff4e31;
  padding: 50px 10% 50px 10%;
  border-radius: 20px 20px 0px 0px;
  position: relative;
  overflow: hidden;
}
.texts {
  height: 100%;
  display : flex;
  flex-direction: column;
  justify-content: center;
}
.infoTitle {
  color: #fffbe3;
  font-size: 2rem;
  font-weight: 800;
  text-align: left;
  margin: 0;
}
.logo-container {
  position: absolute;
  height: 100%;
  width: 200px;
  top: 0;
  right: 15%;
}
.logoImg {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}

.closeButton {
  position: absolute;
  right: 30px;
  top: 15px;
  z-index: 10001;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}
.submit-area {
  padding: 50px 10% 50px 10%;
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
  color: #fb1515;
  vertical-align: top;
  font-size: 1.3rem;
}

.typing {
  margin: 10px 0px 10px 0px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
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
.clause {
  margin-top: 20px;
}
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
  font-family: "Noto Sans KR", sans-serif;
}
.clause-texts > p {
  font-size: 1.2rem;
  display: inline;
}
.non-checked {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #cacaca;
  border-radius: 100px;
  position: relative;
  background: #fcfcfc;
  cursor: pointer;
}

.checked {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #ff4e31;
  border-radius: 100px;
  position: relative;
  background: #ff4e31;
  box-shadow: 0 0 0 2px white inset;
  cursor: pointer;
}

.apply {
  padding: 13px 25px 13px 25px;
  background-color: #ff4e31;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.3rem;
  border-style: none;
  color: #ffffff;
  margin-top: 30px;
  cursor: pointer;
}

.noapply {
  padding: 13px 25px 13px 25px;
  background-color: #cacaca;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.3rem;
  border-style: none;
  color: #666666;
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .banner {
    background-color: #ff4e31;
    padding: 50px 5% 150px 5%;
    overflow: hidden;
    border-radius: 0;
  }
  .logo-container {
    height: 40%;
    width: unset;
    top: unset;
    bottom: 0px;
    right: 5%;
  }
  .logoImg {
    object-fit: contain;
    height: 100%;
  }
  .closeButton {
    right: 20px;
    top: 15px;
  }
  .submit-area {
    padding: 20px 5% 50px 5%;
  }
  .two-input-container {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  .input-container {
    width: 100%;
  }
  .clause-texts > a {
    font-size: 0.5rem;
  }
  .clause-texts > p {
    font-size: 0.5rem;
  }
}
</style>