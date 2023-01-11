<template>
  <div>
    <Banner :detail="bannerdetail"/>
  </div>
</template>

<script>
import Banner from '@/components/About/Banner.vue';

export default {
  name: "ProgramView",
  components: {
    Banner
  },
  data: function () {
    return {
      bannerdetail: {
        imgURL: require("@/assets/Program/programBannerImage.png"),
        type: "PROGRAMS",
        title: "일상의 단조로움을 벗어나 영감을 깨워줄",
        semititle: "당신을 위한 워케이션"
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>