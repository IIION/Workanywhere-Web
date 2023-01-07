<template>
  <div>
    <BannerVue/>
    <div class="contents">
      <div>
        <SegmentVue class="segment-container"/>
        <!-- 신청하기 컴포넌트가 들어갈 자리. 일단 빈 공간으로 -->
        <div class="request-container"></div>
      </div>
      
      <IntroductionVue/>
    </div>
  </div>
</template>

<script>
import BannerVue from '@/components/ProgramDetail/Banner.vue';
import SegmentVue from '@/components/ProgramDetail/Segments.vue'
import IntroductionVue from '@/components/ProgramDetail/Introduction.vue';

export default {
  name: "ProgramDetailView",
  components: {
    BannerVue,
    SegmentVue,
    IntroductionVue
  }
}
</script>

<style scoped>
.contents {
  margin-left: 15%;
  margin-right: 15%;
}
.segment-container{
  width: 50%;
}
.request-container {
  width: 50%;
}
</style>