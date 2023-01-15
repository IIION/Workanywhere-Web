<template>
  <div>
    <Banner :detail="bannerdetail"/>
    <segment-control 
    @selection="onSegmentSelected">
    </segment-control>
    <program-collection :selection="selection" :cells="cells">
    </program-collection>
  </div>
</template>

<script>
import Banner from '@/components/About/Banner.vue';
import SegmentControl from '../components/Program/SegmentControl.vue';
import ProgramCollection from '../components/Program/ProgramCollection.vue';

export default {
  name: "ProgramView",
  components: {
    Banner,
    SegmentControl,
    ProgramCollection
  },
  data: function () {
    return {
      bannerdetail: {
        imgURL: require("@/assets/Program/programBannerImage.png"),
        type: "PROGRAMS",
        title: "일상의 단조로움을 벗어나 영감을 깨워줄",
        semititle: "당신을 위한 워케이션"
      },
      selection: 'ALL',
      cells: [
        {
          id: 1,
          imgURL: require("@/assets/Home/mindfull.png"),
          region: '속초',
          period: '2박 3일',
          title: '리더들을 위한 마인드풀 워케이션',
          date: '2022.12.14 - 12.16',
          tags: ['C-레벨', '자기탐색', '바다뷰', '네트워킹']
        },
        {
          id: 2,
          imgURL: require("@/assets/Home/mindfull.png"),
          region: '영월',
          period: '2주',
          title: '천천히 영월',
          date: '2022.11.25 - 12.31',
          tags: ['임직원', '패러글라이딩', '별빛야경', '산속뷰']
        }
      ]
    }
  },
  methods: {
    onSegmentSelected(segment) {
      console.log(segment)
      this.selection = segment;
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

</style>