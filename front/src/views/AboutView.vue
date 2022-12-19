<template>
  <div>
    <Banner/>
    <AboutPurposeVue/>
  </div>
</template>

<script>
import Banner from '@/components/About/Banner.vue';
import AboutPurposeVue from '@/components/About/AboutPurpose.vue';
export default {
  name: 'AboutView',
  components: {
    Banner,
    AboutPurposeVue
  }
}
</script>

<style>

</style>