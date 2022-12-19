<template>
  <div class="about-purpose-container">
    <div>
      <div class="title">
        <p>낯선 곳에서 새로운 경험,</p>
        <p style="display: inline">그리고 </p>
        <p style="display: inline; color: #ff4e31">빛나는 영감</p>
        <p style="display: inline">을 추구합니다.</p>
      </div>
      <div class="description">
        <p>단순한 출장이나 여행이 아닌</p>
        <p>리모트 워커를 위한 업무 환경, 웰니스 프로그램, 로컬 액티비티까지</p>
        <p>최고의 워케이션 경험을 만들어 드립니다.</p>
        <p style="margin-top: 20px">모처럼 찾아온 일과 휴식에 집중하세요.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPurposeVue",
};
</script>

<style scoped>
.about-purpose-container {
  padding: 95px 0px 95px 0px;
	display: flex;
	justify-content: center;
}

.title {
  text-align: left;
}
.title > p {
  font-weight: 700;
  font-size: 3.6rem;
  margin: 0;
}

.description {
  text-align: left;
  font-size: 2rem;
  margin-top: 30px;
}

.description > p {
  margin: 0;
}
</style>