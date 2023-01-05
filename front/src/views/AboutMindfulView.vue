<template>
  <div>
    <Banner/>
    <TalkVue/>
    <DescriptionVue/>
    <MethodsVue/>
    <ProgramsVue/>
    <WorkationsVue/>
    <FooterVue/>
  </div>
</template>

<script>
import Banner from '@/components/AboutMindful/Banner.vue';
import TalkVue from '@/components/AboutMindful/Talk.vue';
import DescriptionVue from '@/components/AboutMindful/Description.vue';
import MethodsVue from '@/components/AboutMindful/Methods.vue';
import ProgramsVue from '@/components/AboutMindful/Programs.vue';
import WorkationsVue from '@/components/AboutMindful/Workations.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'AboutMindfulView',
  components: {
    Banner,
    TalkVue,
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

<style>

</style>