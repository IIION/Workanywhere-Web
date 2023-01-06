<template>
  <div>
    <BannerVue/>
    <DescriptionVue/>
    <MethodsVue/>
    <ProgramsVue/>
    <WorkationsVue/>
    <FooterVue/>
  </div>
</template>

<script>
import FooterVue from '@/components/Footer.vue';
import BannerVue from '@/components/AboutRetreat/Banner.vue';
import DescriptionVue from '@/components/AboutRetreat/Description.vue';
import MethodsVue from '@/components/AboutRetreat/Methods.vue'
import ProgramsVue from '@/components/AboutRetreat/Programs.vue';
import WorkationsVue from '@/components/AboutRetreat/Workations.vue';

export default {
  name: 'AboutRetreatView',
  components: {
    BannerVue,
    DescriptionVue,
    MethodsVue,
    ProgramsVue,
    WorkationsVue,
    FooterVue
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped> 

</style>