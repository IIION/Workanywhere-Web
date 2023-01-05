<template>
  <div class="container">
    <p class="subtitle">리더들을 위한 마인드풀 워케이션</p>
    <p class="title">The C-Weeks</p>
    <div>
      <p class="saying">
        리더가 할 일의 99%는 자신의 마음을 다스리는 일이다 - 마크 레서
      </p>
      <pre class="description">구글, 페이스북, 애플, 인텔, 등 글로벌 기업은 
        내면 탐색 프로그램을 통해 조직의 업무환경을 탈바꿈 하고 있습니다.
      </pre>
      <pre class="description">
        회사의 대표와 리더는 구성원 보다 더욱 극도의 스트레스에 노출되어 있습니다.
      </pre>
      <pre class="description">
        하지만, 이를 해소하고 나 자신을 돌아볼 시간을 갖는 것은 현실적으로 어려운 일입니다.
      </pre>
      <pre class="description">
        The C-Weeks를 통해서 일상과 떨어진 곳에서 진짜 나 자신을 발견하고,
        일과 삶에 대한 영감과 훌륭한 인사이트를 얻을 수 있는 기회를 제안합니다.
      </pre>
      <pre class="description">
        워케이션을 통해 당신의 삶과 비즈니스를 한 단계 더 나아가는 힘을 얻길 바랍니다.
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMindfulDescriptionVue",
};
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
  font-family: "Bebas Neue";
  font-size: 4rem;
  color: #ff4e31;
  margin: 0px 0px 30px 0px;
}
.saying {
  color: #ff4e31;
  font-weight: 500;
  font-size: 2rem;
  margin: 0px 0px 50px 0px;
}
.description {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 20px 0px 20px 0px;
  color: #666666;
  font-size: 1.8rem;
}

</style>