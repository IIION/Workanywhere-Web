<template>
    <div class="container">
      <p class="title">포인트</p>
  
      <div class="card">
        <p class="checkmark">✓</p>
        <div class="description1">
          <p>낯선 곳에서 새로운 경험,</p>
          <p>그리고 빛나는 영감을</p>
          <p>추구합니다</p>
        </div>
        <div class="description2">
          <p>탁 트인 바다의 파도소리를 들으며 코딩을 하고, 숲 속의 맑은 공기를 마시며 새로운 프로젝트를 기획해보는 것은 어떨까요? 평소에는 하지 못했던 일과 인생에 대해 이야기 해보는 경험은 분명 우리에게 빛나는 영감으로 돌아올 거에요.</p>
        </div>
      </div>
  
      <div class="card">
        <p class="checkmark">✓</p>
        <div class="description1">
          <p>사회적 위기를</p>
          <p>함께 해결합니다</p>
        </div>
        <div class="description2">
          <p>워크애니웨어는 멋진 자연과 볼거리가  있는 인구소멸지역을 위주로 워케이션 서비스를 제공하고 있어요. 유명한 관광지보다 숨겨진 보석 같은 인구 소멸 지역의 여행지에서의  워케이션은 지역 경제에겐 활력을, 우리에겐 기쁨을 줄거에요.</p>
        </div>
      </div>
  
      <div class="card">
        <p class="checkmark">✓</p>
        <div class="description1">
          <p>기업 고객을 위한</p>
          <p>최적의 워케이션 경험을</p>
          <p>만들어 드립니다</p>
        </div>
        <div class="description2">
          <p>어디서 자야할지, 어디서 일해야할지, 뭘 먹어야할지 고민은 저희가 할게요.</p>
          <p>워케이션하며 생기는 급한 상황도 현지에 있는 저희 크루가 도와드릴게요.</p>
          <p>모처럼 찾아온 일과 휴식에 집중하세요.</p>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgramYeongwolPointsVue"
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