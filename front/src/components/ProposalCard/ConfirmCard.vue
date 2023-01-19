<template>
  <div class="confirmcard-container" style="background-color: white">
    <div>
      <p class="price">
        990,000원
      </p>

      <p class="contents-header">날짜</p>

      <!-- 날짜 선택 셀렉터 -->
      <div class="date-select-container">
        <div class="selected" :class="{ open: showDateOption }" @click="showDateOptions">
          {{ selectedProgram }}
        </div>
        <div class="items" :class="{ selectHide: !showDateOption}">
          <div v-for="(option) of dateOptions" 
            :key="option.idx"
            @click="selectedOption(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>


      <p class="contents-header">인원</p>
      <!-- 인원 선택 셀렉터 -->
      <div class="people-select-container">
        <div class="selected" :class="{ open: showPeopleOption }" @click="showPeopleOptions">
          성인 : {{ adults }}
        </div>
        <div class="items" :class="{ selectHide: !showPeopleOption}">
          <div class="option-area">
            <p>성인</p>
            <div class="counting">
              <button>-</button>
              <p>{{ adults }}</p>
              <button>+</button>
            </div>
          </div>
        </div>


      </div>

      <div v-if="selectedProgram != '옵션 선택'" class="selected-info">
        <p>{{ selectedProgram }}</p>
        <p>인원 : {{ adults }}</p>
        <hr>
        <div class="price-info">
          <p>가격</p>
          <p>{{ 990000 * adults | currency }}원</p>
        </div>
      </div>
    </div>

    <div class="buttons">
      <button class="proposal-button">신청하기</button>
      <button class="share-button">공유</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ConfirmCardVue",
  data: function() {
    return {
      adults: 1,
      childs: 0,
      dateOptions: [
        '12월 14일~16일(2박 3일)',
        '1월 14일~16일(2박 3일)',
        '2월 14일~16일(2박 3일)',
      ],
      selectedProgram: "옵션 선택",
      showDateOption: false,
      showPeopleOption: false
    }
  },
  filters: {
    currency: function (value) {
      var num = new Number(value);
      return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  methods: {
    showDateOptions() {
      this.showDateOption = !this.showDateOption
      this.showPeopleOption = false
    },
    showPeopleOptions(){
      this.showDateOption = false
      this.showPeopleOption = !this.showPeopleOption
    },
    selectedOption(option) {
      this.selectedProgram = option
      this.showDateOption = false
    }
  },
}
</script>

<style scoped>

.confirmcard-container {
  width: 80%;
  background-color: white;
  border: 1px solid #D9D9D9;
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
  border: 1px solid #D9D9D9;
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
  border-right: 1px solid #D9D9D9;
  border-left: 1px solid #D9D9D9;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 1;
}

.date-select-container .items div {
  padding: 12px 0px 12px 10px;
  border-bottom: 1px solid #D9D9D9;
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
  border: 1px solid #D9D9D9;
  color: #666666;
  padding: 12px 0px 12px 10px;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
}


.option-area {
  display: flex;
  justify-content: space-between;
}
.counting {
  display: flex;
}




.selected-info {
  text-align: left;
  font-size: 1.3rem;
}
.price-info {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}
.proposal-button {
  width: 100%;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border-radius: 10px;
  border: 0px;
  background-color: #FF4E31;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.share-button {
  width: 100%;
  height: 40px; 
  border-radius: 10px;
  border: 0px;
  background-color: #F7F6F5;
  color: #FF4E31;
  cursor: pointer;
}

</style>