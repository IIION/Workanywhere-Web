<template>
    <div>
        <div class="line"></div>
        <div class="segment">
            <div class="dropdown-menu" v-on:click="toggleMonths">
                <div class="dropdown-button">
                <div class="title">떠나는 달</div>
                <span class="arrow-down"></span>
                </div>
                <ul v-if="showMonths" class="dropdown-list">
                    <li v-for="month in months" :key="month" @click="selectMonth(month)">
                    <input type="checkbox" :checked="month === selectedMonth"/>
                    <label>{{ month }}</label>
                    </li>
                </ul>
            </div>

            <div class="dropdown-menu" v-on:click="toggleDuration">
                <div class="dropdown-button">
                <div class="title">기간</div>
                <span class="arrow-down"></span>
                </div>
                <ul v-if="showPeriods" class="dropdown-list">
                    <li v-for="period in periods" :key="period" @click="selectPeriod(period)">
                    <input type="checkbox" :checked="period === selectedPeriod"/>
                    <span>{{ period }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      showMonths: false,
      selectedMonth: '',
      months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      
      showPeriods: false,
      selectedPeriod: '',
      period_range: [0, 100],
      periods: ['2-3일', '1주 이하', '2주', '3주', '1개월', '2개월']
    }
  },
  methods: {
    toggleMonths() {
      this.showMonths = !this.showMonths;
      this.showPeriods = false;
    },
    toggleDuration() {
      this.showPeriods = !this.showPeriods;
      this.showMonths = false;
    },
    selectMonth(month) {
        if (this.selectedMonth === month) {
            this.selectedMonth = ''
        } else {
            this.selectedMonth = month
        }
        this.$emit('selectedMonth', this.selectedMonth)
    },
    selectPeriod(period) {
        if (this.selectedPeriod === period) {
            this.selectedPeriod = ''
        } else {
            this.selectedPeriod = period
        }

        switch (this.selectedPeriod) {
          case '':
            this.period_range = [0, 100]
            break;
          case '2-3일':
            this.period_range = [2, 3]
            break;
          case '1주 이하':
            this.period_range = [1, 7]
            break;
          case '2주':
            this.period_range = [8, 14]
            break;
          case '3주':
            this.period_range = [15, 21]
            break;
          case '1개월':
            this.period_range = [22, 31]
            break;
          case '2개월':
            this.period_range = [32, 62]
            break;
        }
        this.$emit('period_range', this.period_range)
        this.$emit('selectedPeriod', this.selectedPeriod)
    }
  }
}
</script>


<style scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #B1B1B1;
  margin-top: 13px;
  margin-bottom: 13px;
}
.segment {
    display: flex;
    float: left;
    justify-content: center;
    cursor: pointer;
}
.dropdown-button {
    display: flex;
    height: 43.0px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0.0px 15.0px 0.0px 15.0px;
    border: 1px solid #D9D9D9;
    border-radius : 50px;
    align-items: center;
    color: #666666;
    background-color: white;
}
.title {
    font-size: 20px;
    font-weight: normal;
    font-family: 'Noto Sans KR', sans-serif;
    padding-right: 10px;
    color: #666666;
}
.arrow-down:after {
    display: inline-block;
    content: "";
    position: relative;
    top: 3px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #666666;
}
.dropdown-list {
    position: absolute;
    width: 120px;
    font-size: 15px;
    font-weight: normal;
    font-family: 'Noto Sans KR', sans-serif;
    padding: 15px 26px 10px 0px;
    padding-left: 26px;
    padding-bottom: 10px;
    color: black;
    background: white;
    list-style: none;
    border-radius: 20px;
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.4);
    z-index: 1;
}
.dropdown-list li {
    padding-bottom: 12px;
    cursor: pointer;
    text-align: left;
}
</style>