<template>
  <div class="home">
    <BannerVue/>
    <SelectWorkanywhereVue/>
    <TypeOfWorkationVue/>
    <ServiceInfoVue/>
  </div>
</template>

<script>
import BannerVue from '@/components/Home/Banner.vue';
import SelectWorkanywhereVue from '@/components/Home/SelectWorkanywhere.vue';
import TypeOfWorkationVue from '@/components/Home/TypeOfWorkation.vue';
import ServiceInfoVue from '@/components/Home/ServiceInfo.vue';

export default {
  name: 'HomeView',
  components: {
    BannerVue,
    SelectWorkanywhereVue,
    TypeOfWorkationVue,
    ServiceInfoVue
  }
}
</script>

<style scoped>


</style>