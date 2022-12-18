<template>
  <div class="home">
    <BannerVue/>
    <SelectWorkanywhereVue/>
    <TypeOfWorkationVue/>
    <ServiceInfoVue/>
    <KeysVue/>
  </div>
</template>

<script>
import BannerVue from '@/components/Home/Banner.vue';
import SelectWorkanywhereVue from '@/components/Home/SelectWorkanywhere.vue';
import TypeOfWorkationVue from '@/components/Home/TypeOfWorkation.vue';
import ServiceInfoVue from '@/components/Home/ServiceInfo.vue';
import KeysVue from '@/components/Home/Keys.vue'

export default {
  name: 'HomeView',
  components: {
    BannerVue,
    SelectWorkanywhereVue,
    TypeOfWorkationVue,
    ServiceInfoVue,
    KeysVue
  }
}
</script>

<style scoped>


</style>