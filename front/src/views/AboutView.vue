<template>
  <div>
    <Banner/>
    <AboutPurposeVue/>
    <TypesVue/>
    <CustomConsultingVue/>
    <ReviewVue/>
    <RequestVue/>
    <FooterVue/>
  </div>
</template>

<script>
import Banner from '@/components/About/Banner.vue';
import AboutPurposeVue from '@/components/About/AboutPurpose.vue';
import TypesVue from '@/components/About/Types.vue';
import CustomConsultingVue from '@/components/About/CustomConsulting.vue';
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
    FooterVue
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>