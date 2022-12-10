<template>
  <div class="total-container">
    <p class="new-benefit">달라지는 업무 방식에 맞는 새로운 복지</p>
    <div>
      <p class="new-benefit" style="display: inline; color: #FF4E31;">워크애니웨어</p>
      <p class="new-benefit" style="display: inline;">를 선택하는 이유</p>
    </div>
  
    <!-- 굳 -->
    <div class="segment">
      <button id="0" :class="[selection === '0' ? 'selected' : 'common']" @click="changeSelect($event)">직무 및 목적별 큐레이션</button>
      <button id="1" :class="[selection === '1' ? 'selected' : 'common']" @click="changeSelect($event)">최고의 전문가가 만든 프로그램</button>
      <button id="2" :class="[selection === '2' ? 'selected' : 'common']" @click="changeSelect($event)">편리한 예약 및 관리 솔루션</button>
    </div>
    <div class="detail">
      <!-- 첫번째 버튼 클릭 -->
      <div class="container" v-if="(selection == '0')">
        <div class="image-container">
          <img class="decription-image" src="@/assets/Home/curation.png">
        </div>
        <div class="texts">
          <p class="title">직무 및 목적별 큐레이션</p>
          <p class="semititle">업무에 몰입과 집중을 도와줘요</p>
          <p class="description">직무 및 목적에 맞는 장소와 지역, 프로그램을 기획하여 추천드려요</p>
        </div>
      </div>

      <!-- 두번째 버튼 클릭 -->
      <div class="container" v-if="(selection == '1')">
        <div class="image-container">
          <img class="decription-image" src="@/assets/Home/program.png">
        </div>
        
        <div class="texts">
          <p class="title">최고의 전문가가 만든 프로그램</p>
          <p class="semititle">영감을 가져다 주는 새로운 경험</p>
          <p class="description">휴가지에서도 업무에 효율성을 높여주는 업무공간을 큐레이션하여 제공합니다.</p>
        </div>
      </div>

      <!-- 세번째 버튼 클릭 -->
      <div class="container" v-if="(selection == '2')">
        <div class="image-container">
          <img class="decription-image" src="@/assets/Home/curation.png">
        </div>
        
        <div class="texts">
          <p class="title">편리한 예약 및 관리 솔루션</p>
          <p class="semititle">예약과 관리도 쉽고 편리하게</p>
          <p class="description">임직원은 앱을 통해 워케이션을 편하게 예약하고, 담당자는 전용 어드민으로 편하게 관리할 수 있습니다</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'SelectWorkanywhereVue',
  data: function() {
    return {
      selection: '0'
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

<style>
.total-container {
  margin-top: 131px;
  margin-bottom: 131px;
}

.new-benefit {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 3rem;
}

.segment {
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
}

.segment button {
  margin-left: 10px;
  margin-right: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: normal;
  padding: 12.5px 33.5px 12.5px 33.5px;
  border: none;
  border-radius : 50px;
}

.selected {
  color: white;
  background-color: #FF4E31;
}

.common {
  color: #666666;
  background-color: #F7F6F5;
}

.detail {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
}

.image-container {
  width: 50%;
  height: 95%;
  margin: 0px 74px 0px 74px;
  border-radius: 20px;
  box-shadow: 0px 5px 8px 3px rgba(0, 0, 0, 0.17);
  overflow: hidden;
}

.decription-image {
  width: 100%;
  object-fit: fill;
}

.texts {
  width: 30%;
}

.texts p {
  text-align: left;
}

.title {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 2rem;
  color: #FF4E31;
  font-weight: 600;
}

.semititle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3.2rem;
  font-weight: bold;
}

.description {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.8rem;
  color: #666666;
  font-weight: 400;
}

</style>