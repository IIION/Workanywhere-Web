<template>
  <div :class="{ noscroll: showShare }">
    <BannerVue/>
    <div class="contents">
      <div style="display:flex; justify-content: space-between;">
        <div style="width: 43%">
          <SegmentVue class="segment-container"/>
          <IntroductionVue class="introduction"/>
        </div>
        <div style="width: 43%">
          <ConfirmVue
            v-on:showShareCard="showShareCard"
          />
        </div>
      </div>
      <PointsVue/>
      <LodgingVue/>
      <OfficeVue/>
      <Programs/>
    </div>
    <FooterVue/>
    <div class="modal-background" v-if="showShare">
      <Share class="shareCard" v-on:showShareCard="showShareCard"/>
    </div>
    
  </div>
</template>

<script>
import BannerVue from '@/components/ProgramSokcho/Banner.vue';
import SegmentVue from '@/components/ProgramSokcho/Segments.vue';
import ConfirmVue from '@/components/ProgramSokcho/ConfirmCard.vue';
import Share from '@/components/ProgramSokcho/Share.vue';
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
    ConfirmVue,
    Share,
    IntroductionVue,
    PointsVue,
    LodgingVue,
    OfficeVue,
    Programs,
    FooterVue
  },
  data: function() {
    return {
      showShare: false
    }
  },
  methods: {
    showShareCard(bool) {
      this.showShare = bool
      if (this.showShare == true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.contents {
  margin-left: 15%;
  margin-right: 15%;
}
.noscroll {
  overflow:hidden !important;
  touch-action: none;
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
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 1000;
  
}
.shareCard {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
  box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
  
}
</style>