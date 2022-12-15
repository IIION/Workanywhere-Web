<template>
  <div class="home">
    <BannerVue/>
    <SelectWorkanywhereVue/>
    <TypeOfWorkationVue/>
  </div>
</template>

<script>
import BannerVue from '@/components/Home/Banner.vue';
import SelectWorkanywhereVue from '@/components/Home/SelectWorkanywhere.vue';
import TypeOfWorkationVue from '@/components/Home/TypeOfWorkation.vue';

export default {
  name: 'HomeView',
  components: {
    BannerVue,
    SelectWorkanywhereVue,
    TypeOfWorkationVue
  }
}
</script>

<style scoped>


</style>