<template>
  <div>
    <BannerVue/>
    <SelectWorkanywhereVue/>
    <TypeOfWorkationVue/>
    <ServiceInfoVue/>
    <KeysVue/>
    <ReviewVue/>
    <PartnersVue/>
    <ProposalVue/>
    <FooterVue/>
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
    FooterVue
  }
}
</script>

<style scoped>


</style>