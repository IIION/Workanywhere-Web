<template>
  <div>
    <Banner :detail="bannerdetail"/>
    <AboutPurposeVue/>
    <TypesVue/>
    <CustomConsultingVue v-on:showConsulting="showConsulting"/>
    <ReviewVue/>
    <RequestVue v-on:showConsulting="showConsulting"/>
    <FooterVue/>
    <div v-if="showConsultingModal == true" class="modal-background">
      <ConsultingModal class="consulting-modal" v-on:showConsulting="showConsulting"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/About/Banner.vue';
import AboutPurposeVue from '@/components/About/AboutPurpose.vue';
import TypesVue from '@/components/About/Types.vue';
import CustomConsultingVue from '@/components/About/CustomConsulting.vue';
import ConsultingModal from '@/components/Home/ConsultingModal.vue';
import ReviewVue from '@/components/Home/Review.vue';
import RequestVue from '@/components/About/Request.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'AboutView',
  components: {
    Banner,
    AboutPurposeVue,
    TypesVue,
    CustomConsultingVue,
    ReviewVue,
    RequestVue,
    ConsultingModal,
    FooterVue
  },
  data: function () {
    return {
      bannerdetail: {
        imgURL: require("@/assets/About/aboutBannerImage.png"),
        type: "ABOUT",
        title: "노트북만 있다면 어디든 사무실이 되는 시대",
        semititle: "Work Anywhere"
      },
      showConsultingModal: false
    }
  },
  methods: {
    showConsulting(bool) {
      this.showConsultingModal = bool
      if (this.showConsultingModal == true) {
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
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 1000;
  overflow-y: auto;
}
.consulting-modal {
  width: 60%;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1001;
  transform: translateX(-50%);
  background-color: white;
  box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
  border-radius: 20px;
}
@media screen and (max-width: 768px) {
  .consulting-modal {
    width: 100%;
    border-radius: 0;
    position: relative;
    min-height: 100%;
  }
}
</style>