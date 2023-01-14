<template>
    <div>
      <BannerVue/>
      <div class="contents">
        <div style="display:flex">
          <div style="width: 50%">
            <SegmentVue class="segment-container"/>
            <!-- 여기 인트로덕션 뷰 -->
            <Introduction class="introduction"/>
          </div>
          <!-- 신청하기 컴포넌트가 들어갈 자리. 일단 빈 공간으로 -->
          <p class="request-container">공간 확인용 테스트</p>
        </div>
        <!-- 여기 쭉쭉 -->
        <PointsVue/>
        <Lodging/>
        <Office/>
        <Programs/>
      </div>
      <FooterVue/>
    </div>
  </template>
  
  <script>
  import BannerVue from '@/components/ProgramYeongwol/Banner.vue';
  import SegmentVue from '@/components/ProgramYeongwol/Segments.vue';
  import Introduction from '@/components/ProgramYeongwol/Introduction.vue';
  import PointsVue from '@/components/ProgramYeongwol/Points.vue';
  import Lodging from '@/components/ProgramYeongwol/Lodging.vue';
  import Office from '@/components/ProgramYeongwol/Office.vue';
  import Programs from '@/components/ProgramYeongwol/Programs.vue';
  import FooterVue from '@/components/Footer.vue';
  
  export default {
    name: "ProgramYeongwolView",
    components: {
      BannerVue,
      SegmentVue,
      Introduction,
      PointsVue,
      Lodging,
      Office,
      Programs,
      FooterVue
    }
  }
  </script>
  
  <style scoped>
  .contents {
    margin-left: 15%;
    margin-right: 15%;
  }
  .segment-container{
    margin-bottom: 50px;
  }
  .request-container {
    width: 50%;
    background-color: red;
    margin-left: 10%;
  }
  .introduction {
    width: 100%;
  }
  </style>