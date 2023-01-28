<template>
  <div :class="{ noscroll: showShare }">
    <BannerVue/>
    <div class="detail-contents-wrapper">
      <div style="display:flex; justify-content: space-between;" ref="child0" class="childs">
        <div class="intro-seg-wrapper">
          <SegmentVue class="segment-container" v-on:moveToChild="moveToChild"/>
          <IntroductionVue class="introduction" />
        </div>
        <div class="confirm-wrapper">
          <ConfirmVue
            v-on:showShareCard="showShareCard"
          />
        </div>
      </div>
      <button class="mobile-share" @click="showShareCard">공유</button>
      <div ref="child1" class="childs">
        <PointsVue />
      </div>
      <div ref="child2" class="childs">
        <LodgingVue />
      </div>  
      <div ref="child3" class="childs">
        <OfficeVue />
      </div>
      <div ref="child4" class="childs">
        <Programs />
      </div>
      
    </div>
    <FooterVue/>
    <div class="modal-background" v-if="showShare">
      <Share class="shareCard" v-on:showShareCard="showShareCard"/>
    </div>
    <MobileConfirmCard class="mobile-confirm-wrapper"/>
    
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
import MobileConfirmCard from '@/components/ProgramSokcho/MobileConfirmCard.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: "ProgramSokchoView",
  components: {
    BannerVue,
    SegmentVue,
    ConfirmVue,
    Share,
    MobileConfirmCard,
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
    },
    moveToChild(id) {
      this.$refs[`child${id}`].scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        margin: 100
      })
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.detail-contents-wrapper {
  padding-left: 15%;
  padding-right: 15%;
}
.noscroll {
  overflow:hidden !important;
  touch-action: none;
}
.childs {
  scroll-margin: 70px;
}
.intro-seg-wrapper {
  width: 43%
}
.confirm-wrapper {
  width: 43%
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
.mobile-share {
  display: none;
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
.mobile-confirm-wrapper {
  display: none;
}
@media screen and (max-width: 768px) {
  .detail-contents-wrapper {
    padding-top: 10px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .segment-container{
    margin-bottom: 25px;
  }
  .confirm-wrapper {
    display: none;
  }
  .intro-seg-wrapper {
    width: 100%
  }
  .mobile-share {
    display: unset;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 0px;
    background-color: #f7f6f5;
    color: #ff4e31;
    cursor: pointer;
  }
  .shareCard {
    top:unset;
    bottom: 0%;
    transform: translate(-50%, 0%);
    z-index: 10003;
  }
  .mobile-confirm-wrapper {
    display: unset;
    position: fixed;
    bottom: 0;
    width: 100%;
    transform: translate(-50%, 0%);
    z-index: 100;
  }
}
</style>