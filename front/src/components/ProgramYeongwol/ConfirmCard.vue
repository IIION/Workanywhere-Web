<template>
  <div class="confirmcard-container" style="background-color: white">
    <div>
      <p class="price">400,000원 ~</p>

      <p class="contents-header">날짜</p>

      <!-- 날짜 선택 셀렉터 -->
      <div class="date-select-container">
        <div
          class="selected"
          :class="{ open: showDateOption }"
          @click="showDateOptions"
        >
          {{ selectedProgram }}
        </div>
        <div class="items" :class="{ selectHide: !showDateOption }">
          <div
            v-for="option of dateOptions"
            :key="option.idx"
            @click="selectedOption(option)"
          >
            {{ option.detailPeriod }}
          </div>
        </div>
      </div>

      <p class="contents-header">인원</p>
      <!-- 인원 선택 셀렉터 -->
      <div class="people-select-container">
        <div
          class="selected"
          :class="{ open: showPeopleOption }"
          @click="showPeopleOptions"
        >
          {{ totalPeople }}명
        </div>
        <div class="items" :class="{ selectHide: !showPeopleOption }">
          <div class="option-area">
            <p>성인</p>
            <div class="counting">
              <button @click="adultMinus" class="counting-button">−</button>
              <p>{{ adults }}</p>
              <button @click="adultPlus" class="counting-button">+</button>
            </div>
          </div>
          <div class="option-area">
            <p>어린이</p>
            <div class="counting">
              <button @click="childMinus" class="counting-button">−</button>
              <p>{{ childs }}</p>
              <button @click="childPlus" class="counting-button">+</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedProgram != '옵션 선택'" class="selected-info">
        <p>{{ selectedProgram }}</p>
        <p>인원 : {{ adults }}</p>
        <hr />
        <div class="price-info">
          <p>가격</p>
          <p>{{ (standardPrice * adults) | currency }}원</p>
        </div>
      </div>
    </div>

    <div class="buttons">
      <button
        :class="[
          selectedProgram !== '옵션 선택'
            ? 'proposal-button'
            : 'proposal-button-deactive',
        ]"
        @click="moveToProposalPage"
      >
        신청하기
      </button>
      <button class="share-button">공유</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ProgramYeongwolConfirmCardVue",
  data: function () {
    return {
      adults: 1,
      childs: 0,
      totalPeople: 1,
      dateOptions: [
        {
          detailPeriod: "패밀리룸/11월 27일~9일(13박 14일)",
          period: "13박 14일",
          time: "2022.11.27 - 12.9",
          additionalCost: 0
        },
        {
          detailPeriod: "패밀리룸/12월 4일~16일(13박 14일)",
          period: "13박 14일",
          time: "2022.12.4 - 12.16",
          additionalCost: 0
        },
        {
          detailPeriod: "패밀리룸/12월 11일~23일(13박 14일)",
          period: "13박 14일",
          time: "2022.12.11 - 12.23",
          additionalCost: 0
        },
        {
          detailPeriod: "패밀리룸/12월 18일~30일(13박 14일)",
          period: "13박 14일",
          time: "2022.12.18 - 12.30",
          additionalCost: 0
        },
        {
          detailPeriod: "디럭스룸/11월 27일~9일(13박 14일)(+350,000원)",
          period: "13박 14일",
          time: "2022.11.27 - 12.9",
          additionalCost: 350000
        },
        {
          detailPeriod: "디럭스룸/12월 4일~16일(13박 14일)(+350,000원)",
          period: "13박 14일",
          time: "2022.12.4 - 12.16",
          additionalCost: 350000
        },
        {
          detailPeriod: "디럭스룸/12월 11일~23일(13박 14일)(+350,000원)",
          period: "13박 14일",
          time: "2022.12.11 - 12.23",
          additionalCost: 350000
        },
        {
          detailPeriod: "디럭스룸/12월 18일~30일(13박 14일)(+350,000원)",
          period: "13박 14일",
          time: "2022.12.18 - 12.30",
          additionalCost: 350000
        },
      ],
      selectedProgram: "옵션 선택",
      selectedPeriod: "",
      selectedTime: "",
      showDateOption: false,
      showPeopleOption: false,
      standardPrice: 400000,
    };
  },
  filters: {
    currency: function (value) {
      var num = new Number(value);
      return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  methods: {
    showDateOptions() {
      this.showDateOption = !this.showDateOption;
      this.showPeopleOption = false;
    },
    showPeopleOptions() {
      this.showDateOption = false;
      this.showPeopleOption = !this.showPeopleOption;
    },
    selectedOption(option) {
      this.selectedProgram = option.detailPeriod;
      this.selectedPeriod = option.period;
      this.selectedTime = option.time;
      if (option.additionalCost != 0) {
        this.standardPrice = 400000 + option.additionalCost
      } else {
        this.standardPrice = 400000
      }
      this.showDateOption = false;
    },
    adultPlus() {
      this.adults += 1;
      this.totalPeople += 1;
    },
    adultMinus() {
      if (this.adults > 1) {
        this.adults -= 1;
        this.totalPeople -= 1;
      }
    },
    childMinus() {
      if (this.childs > 0) {
        this.childs -= 1;
        this.totalPeople -= 1;
      }
    },
    childPlus() {
      this.childs += 1;
      this.totalPeople += 1;
    },
    moveToProposalPage() {
      if (this.selectedProgram != "옵션 선택") {
        this.$router.push({
          name: "yeongwolproposal",
          params: {
            adult: this.adults,
            child: this.childs,
            period: this.selectedPeriod,
            time: this.selectedTime,
            detailPeriod: this.selectedProgram,
            standardPrice: this.standardPrice
          },
        });
      }
    },
  },
};
</script>
  
  <style scoped>
.confirmcard-container {
  width: 80%;
  background-color: white;
  border: 1px solid #d9d9d9;
  box-shadow: 4px 7px 14px 1px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  padding: 43px 21px 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
}
.price {
  font-weight: 700;
  font-size: 2rem;
  text-align: left;
  margin-top: 0;
}
.contents-header {
  font-weight: 500;
  font-size: 1.5rem;
  text-align: left;
}
.date-select-container {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}
.date-select-container .selected {
  background-color: white;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  color: #666666;
  padding: 12px 0px 12px 10px;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
}
.date-select-container .selected.open {
  border-radius: 10px 10px 0px 0px;
}
.date-select-container .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}
.date-select-container .items {
  font-size: 1.3rem;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 1;
}

.date-select-container .items div {
  padding: 12px 10px 12px 10px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  user-select: none;
}

.selectHide {
  display: none;
}

.people-select-container {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}
.people-select-container .selected {
  background-color: white;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  color: #666666;
  padding: 12px 0px 12px 10px;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
}
.people-select-container .selected.open {
  border-radius: 10px 10px 0px 0px;
}

.people-select-container .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.people-select-container .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 3;
}

.option-area {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  padding: 12px 10px 12px 10px;
  font-size: 1.3rem;
}
.option-area p {
  margin: 0;
}

.counting {
  display: flex;
}
.counting p {
  margin: 0px 5px 0px 5px;
}
.counting-button {
  background-color: #f7f6f5;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
}
.selected-info {
  text-align: left;
  font-size: 1.3rem;
  margin: 20px 0px 0px 0px;
}
.price-info {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}
.proposal-button {
  width: 100%;
  height: 40px;
  margin: 20px 0px 10px 0px;
  border-radius: 10px;
  border: 0px;
  background-color: #ff4e31;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.proposal-button-deactive {
  width: 100%;
  height: 40px;
  margin: 20px 0px 10px 0px;
  border-radius: 10px;
  border: 0px;
  background-color: #cacaca;
  color: #666666;
  font-weight: 500;
}
.share-button {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 0px;
  background-color: #f7f6f5;
  color: #ff4e31;
  cursor: pointer;
}
</style>