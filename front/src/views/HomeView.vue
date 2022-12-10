<template>
  <div class="home">
    <BannerVue/>
    <SelectWorkanywhereVue/>
  </div>
</template>

<script>
import BannerVue from '@/components/Home/Banner.vue';
import SelectWorkanywhereVue from '@/components/Home/SelectWorkanywhere.vue';

export default {
  name: 'HomeView',
  components: {
    BannerVue,
    SelectWorkanywhereVue
  }
}
</script>

<style>


</style>