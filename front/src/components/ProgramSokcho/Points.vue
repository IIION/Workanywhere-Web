<template>
  <div class="container">
    <p class="title">포인트</p>

    <div class="card">
      <p class="checkmark">✓</p>
      <div class="description1">
        <p>이름, 나이, 지위는</p>
        <p>잠깐 내려 놓아요.</p>
      </div>
      <div class="description2">
        <p>우리 모두는 나이, 성별, 지위와 관계없이 동등한 존재예요.</p>
        <p>그래서 현재의 이름이 아닌 새로운 이름을 사용해요.</p>
        <p>이곳에서는 서로를 존중하며 평등하게 대화하며 교류해요.</p>
      </div>
    </div>

    <div class="card">
      <p class="checkmark">✓</p>
      <div class="description1">
        <p>각 분야 최고의</p>
        <p>전문가가 만든 프로그램</p>
      </div>
      <div class="description2">
        <p>표준화 불가한 국내 유일 자기객관화 내면 탐색 프로그램,</p>
        <p>전문 도수치료사의 교정 테라피, 현업 HR 전문가의 인사이트 토크 등</p>
        <p>국내 최고의 전문가들과 함께 만들고 직접 운영해요.</p>
      </div>
    </div>

    <div class="card">
      <p class="checkmark">✓</p>
      <div class="description1">
        <p>모든 일정은</p>
        <p>자유롭게 선택하세요</p>
      </div>
      <div class="description2">
        <p>정해진 틀 안에서 움직이는 프로그램은 최대한 지양해요.</p>
        <p>온전히 일에 집중해도 되고, 휴식에만 집중해도 좋아요.</p>
        <p>저희는 최고의 워케이션 경험이 남을 수 있게 최선을 다해 도울게요.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProgramDetailPointsVue"
}
</script>

<style scoped>
.container {
  padding: 30px 0px 30px 0px;
}
.title {
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
}
.card {
  margin: 30px 0px 30px 0px;
  background-color: #F7F6F5;
  padding: 30px;
  border-radius: 25px;
  display:flex;
  justify-content: left;
  align-items: center
}
.checkmark{
  font-size: 2rem;
  color: #FF4E31;
  margin-right: 30px;
}
.description1 {
  margin-right: 30px;
  text-align: left;
  min-width: 250px;
}
.description1 > p{
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
}
.description2 {
  text-align: left;
}
.description2 > p{
  font-size: 1.5rem;
  color: #666666;
  margin: 0;
}
</style>