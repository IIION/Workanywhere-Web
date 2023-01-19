<template>
  <div>
    <Banner :detail="bannerdetail"/>
    <div class="total-container">
      <side-bar class="side-bar" @selectedMonth="updateMonth" @period_range="updatePeriod" :style="{ width: computedSideBarWidth }"/>
      <div class="collection-container" :style="{ width: computedCollectionWidth}">
        <div class="container">
          <div class="segment-control">
            <segment-control @selection-region="updateRegion"></segment-control>
          </div>
          <div class="sorting-drop-down">
            <sorting-drop-down @selection-sort-option="updateSortOption"></sorting-drop-down>
          </div>
        </div>
        <div class="program-collection">
          <program-collection :selection="selection" :sortOption="sortOption" :selectedMonth="selectedMonth" :period_range="period_range" :cells="cells"></program-collection>
        </div>
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
import SideBar from '../components/Program/SideBar.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: "ProgramView",
  components: {
    Banner,
    SegmentControl,
    SortingDropDown,
    ProgramCollection,
    SideBar,
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
      selectedMonth: '',
      period_range: [0, 100],
      cells: [
        {
          id: 1,
          imgURL: require("@/assets/Home/mindfull.png"),
          region: '속초',
          period: '2박 3일',
          period_days: 3,
          title: '리더들을 위한 마인드풀 워케이션',
          score: 10.0,
          date: '2022.12.14 - 12.16',
          tags: ['C-레벨', '자기탐색', '바다뷰', '네트워킹']
        },
        {
          id: 2,
          imgURL: require("@/assets/Home/mindfull.png"),
          region: '영월',
          period: '2주',
          period_days: 14,
          title: '천천히 영월',
          score: 5.0,
          date: '2022.11.25 - 12.31',
          tags: ['임직원', '패러글라이딩', '별빛야경', '산속뷰']
        }
      ]
    }
  },
  computed: {
    computedCollectionWidth() {
      return this.isSmallWindow ? `${window.screen.width * 1/4}px` : `${window.screen.width * 1/2 + 56}px`
    },
    computedSideBarWidth() {
      return `${window.screen.width * 0.13}px`
    }
  },
  methods: {
    updateRegion(segment) {
      console.log(segment)
      this.selection = segment;
    },
    updateSortOption(option) {
      console.log(option)
      this.sortOption = option;
    },
    updateMonth(month) {
      console.log(month)
      this.selectedMonth = month;
    },
    updatePeriod(period) {
      console.log(period)
      this.period_range = period;
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
  display: inline-flex;
  justify-content: space-between;
  flex-basis: 0;
}
.side-bar {
  margin-top: 90px;
  margin-right: 56px;
}
.collection-container {
  display: grid;
  padding-bottom: 167px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>