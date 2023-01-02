<template>
  <div>
    <Banner/>
    <AboutPurposeVue/>
    <TypesVue/>
    
  </div>
</template>

<script>
import Banner from '@/components/About/Banner.vue';
import AboutPurposeVue from '@/components/About/AboutPurpose.vue';
import TypesVue from '@/components/About/Types.vue';
export default {
  name: 'AboutView',
  components: {
    Banner,
    AboutPurposeVue,
    TypesVue
  }
}
</script>

<style scoped>

</style>