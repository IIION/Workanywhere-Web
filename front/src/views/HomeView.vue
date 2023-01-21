<template>
  <div>
    <BannerVue/>
    <SelectWorkanywhereVue/>
    <TypeOfWorkationVue/>
    <ServiceInfoVue/>
    <KeysVue/>
    <ReviewVue/>
    <PartnersVue/>
    <ProposalVue v-on:showServiceApply="showServiceApply"/>
    <FooterVue/>
    <div v-if="showServiceApplyModal == true" class="modal-background">
      <ServiceApplyModal class="service-apply-modal" v-on:showServiceApply="showServiceApply"/>
    </div>
  </div>
</template>

<script>
import BannerVue from '@/components/Home/Banner.vue';
import SelectWorkanywhereVue from '@/components/Home/SelectWorkanywhere.vue';
import TypeOfWorkationVue from '@/components/Home/TypeOfWorkation.vue';
import ServiceInfoVue from '@/components/Home/ServiceInfo.vue';
import KeysVue from '@/components/Home/Keys.vue'
import ReviewVue from '@/components/Home/Review.vue';
import PartnersVue from '@/components/Home/Partners.vue';
import ProposalVue from '@/components/Home/Proposal.vue';
import ServiceApplyModal from '@/components/Home/ServiceApplyModal.vue';
import FooterVue from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    BannerVue,
    SelectWorkanywhereVue,
    TypeOfWorkationVue,
    ServiceInfoVue,
    KeysVue,
    ReviewVue,
    PartnersVue,
    ProposalVue,
    ServiceApplyModal,
    FooterVue
  },
  data: function() {
    return {
      showServiceApplyModal: false
    }
  },
  methods: {
    showServiceApply(bool){
      this.showServiceApplyModal = bool
      if (this.showServiceApplyModal == true) {
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
.service-apply-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
  border-radius: 20px;
  
}

</style>