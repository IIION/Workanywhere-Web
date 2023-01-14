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
      <Programs/>
    </div>
    <FooterVue/>
  </div>
</template>

<script>
import BannerVue from '@/components/ProgramSokcho/Banner.vue';
import SegmentVue from '@/components/ProgramSokcho/Segments.vue'
import IntroductionVue from '@/components/ProgramSokcho/Introduction.vue';
import PointsVue from '@/components/ProgramSokcho/Points.vue';
import LodgingVue from '@/components/ProgramSokcho/Lodging.vue';
import OfficeVue from '@/components/ProgramSokcho/Office.vue';
import Programs from '@/components/ProgramSokcho/Programs.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: "ProgramSokchoView",
  components: {
    BannerVue,
    SegmentVue,
    IntroductionVue,
    PointsVue,
    LodgingVue,
    OfficeVue,
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