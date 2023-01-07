<template>
  <div class="container">
    <div class="header">
      <p class="location">강원도 > 속초</p>
      <p class="title">리더들을 위한 마인드풀 워케이션</p>
    </div>
    <div class="segments">
      <p id="0" :class="[selection === '0' ? 'selected' : 'common']" @click="changeSelect($event)">소개</p>
      <p id="1" :class="[selection === '1' ? 'selected' : 'common']" @click="changeSelect($event)">포인트</p>
      <p id="2" :class="[selection === '2' ? 'selected' : 'common']" @click="changeSelect($event)">숙소</p>
      <p id="3" :class="[selection === '3' ? 'selected' : 'common']" @click="changeSelect($event)">오피스</p>
      <p id="4" :class="[selection === '4' ? 'selected' : 'common']" @click="changeSelect($event)">프로그램</p>
      <p id="5" :class="[selection === '5' ? 'selected' : 'common']" @click="changeSelect($event)">리뷰</p>
    </div>
    <hr noshade>
  </div>
</template>

<script>
export default {
  name: "ProgramDetailSegmentsVue",
  data: function () {
    return {
      selection: "0"
    }
  },
  methods: {
    changeSelect(event){
      const targetId = event.currentTarget.id
      this.selection = targetId
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}
.header {
  text-align: left;
}
.location {
  font-size: 1.1rem;
  color: #666666;
}
.title {
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
}
.segments{
  margin-top:30px;
  display: flex;
  justify-content: space-between;
}
.segments > p {
  font-size: 1.4rem;
  margin:0;
  z-index: 100;
}
hr {
  position: absolute;
  border-color: #F7F6F5;
  background-color: #F7F6F5;
  width: 120%;
  z-index: 90;
  left:-10%;
}

.selected {
  font-weight: 700;
  color: #FF4E31;
  text-decoration-line: underline;
  text-underline-offset: 9px;
  text-decoration-thickness: 2px;
  cursor: pointer;
}

.common {
  color: #666666;
  cursor: pointer;
}

</style>