<template>
  <div class="container">
    <p class="subtitle">임직원들을 위한 자유로운 워케이션</p>
    <p class="title">애니웨어 리트릿</p>
    <div>
      <pre class="description">복잡한 도심을 떠나 일을 하고 싶은 리모트 워커들을 위한
        원할때 쉬고, 원할때 일하는
        자유로운 워케이션 프로그램입니다.
      </pre>
      <pre class="description">
        일상과 떨어진 곳에서 진짜 나 자신을 발견하고,
        일과 삶에 대한 영감과 훌륭한 인사이트를 얻을 수 있는 기회를 제안합니다.
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutRetreatDescriptionVue"
}
</script>

<style scoped>
.container {
  padding: 50px 0px 50px 0px;
}
.subtitle {
  font-size: 2rem;
  color: #ff4e31;
  margin: 0;
}
.title {
  font-size: 4rem;
  color: #ff4e31;
  font-weight: 700;
  margin: 0px 0px 30px 0px;
}
.description {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 20px 0px 20px 0px;
  color: #666666;
  font-size: 1.8rem;
}
</style>