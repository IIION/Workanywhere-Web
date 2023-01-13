<template>
  <div>
    <BannerVue/>
    <div class="contents">
      <div style="display:flex">
        <div style="width: 50%">
          <SegmentVue class="segment-container"/>
          <IntroductionVue class="introduction"/>
        </div>
        <!-- 신청하기 컴포넌트가 들어갈 자리. 일단 빈 공간으로 -->
        <p class="request-container">공간 확인용 테스트</p>
      </div>
      
      
      <PointsVue/>
      <LodgingVue/>
      <OfficeVue/>
    </div>
    <FooterVue/>
  </div>
</template>

<script>
import BannerVue from '@/components/ProgramDetail/Banner.vue';
import SegmentVue from '@/components/ProgramDetail/Segments.vue'
import IntroductionVue from '@/components/ProgramDetail/Introduction.vue';
import PointsVue from '@/components/ProgramDetail/Points.vue';
import LodgingVue from '@/components/ProgramDetail/Lodging.vue';
import OfficeVue from '@/components/ProgramDetail/Office.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: "ProgramDetailView",
  components: {
    BannerVue,
    SegmentVue,
    IntroductionVue,
    PointsVue,
    LodgingVue,
    OfficeVue,
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