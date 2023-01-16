<template>
  <div>
    <Banner :detail="bannerdetail"/>
    <div class="total-container" :style="{ width: computedWidth}">
      <div class="container">
        <div class="segment-control">
          <segment-control @selection="onSegmentSelected"></segment-control>
        </div>
        <div class="sorting-drop-down">
          <sorting-drop-down @select="updateSortOption"></sorting-drop-down>
        </div>
      </div>
      <div class="program-collection">
        <program-collection :selection="selection" :sortOption="sortOption" :cells="cells"></program-collection>
      </div>
    </div>
    <FooterVue/>
  </div>
</template>

<script>
import Banner from '@/components/About/Banner.vue';
import SegmentControl from '../components/Program/SegmentControl.vue';
import SortingDropDown from '../components/Program/SortingDropDown.vue';
import ProgramCollection from '../components/Program/ProgramCollection.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: "ProgramView",
  components: {
    Banner,
    SegmentControl,
    SortingDropDown,
    ProgramCollection,
    FooterVue
  },
  data: function () {
    return {
      isSmallWindow: false,
      bannerdetail: {
        imgURL: require("@/assets/Program/programBannerImage.png"),
        type: "PROGRAMS",
        title: "일상의 단조로움을 벗어나 영감을 깨워줄",
        semititle: "당신을 위한 워케이션"
      },
      selection: 'ALL',
      sortOption: 'recommend',
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
        },
        {
          id: 3,
          imgURL: require("@/assets/Home/mindfull.png"),
          region: '속초',
          period: '2박 3일',
          title: '리더들을 위한 마인드풀 워케이션',
          date: '2022.12.14 - 12.16',
          tags: ['C-레벨', '자기탐색', '바다뷰', '네트워킹']
        },
        {
          id: 4,
          imgURL: require("@/assets/Home/mindfull.png"),
          region: '속초',
          period: '2박 3일',
          title: '리더들을 위한 마인드풀 워케이션',
          date: '2022.12.14 - 12.16',
          tags: ['C-레벨', '자기탐색', '바다뷰', '네트워킹']
        },
        {
          id: 5,
          imgURL: require("@/assets/Home/mindfull.png"),
          region: '속초',
          period: '2박 3일',
          title: '리더들을 위한 마인드풀 워케이션',
          date: '2022.12.14 - 12.16',
          tags: ['C-레벨', '자기탐색', '바다뷰', '네트워킹']
        }
      ]
    }
  },
  computed: {
    computedWidth() {
      return this.isSmallWindow ? `${window.screen.width * 1/4}px` : `${window.screen.width * 1/2 + 56}px`
    }
  },
  methods: {
    onSegmentSelected(segment) {
      console.log(segment)
      this.selection = segment;
    },
    updateSortOption(option) {
      this.sortOption = option
    },
    handleResize() {
        this.isSmallWindow = window.innerWidth < window.screen.width * 1/2 + 56
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize)
  }
}
</script>

<style scoped>
.total-container {
  display: grid;
  margin: 0 auto;
  padding-bottom: 167px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>