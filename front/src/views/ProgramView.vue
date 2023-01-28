<template>
  <div>
    <Banner :detail="bannerdetail"/>
    <div class="total-container">
      <side-bar ref="sideBar" class="side-bar" @selectedMonth="updateMonth" @selectedPeriod="sendPeriod" @period_range="updatePeriod" :style="{ width: computedSideBarWidth }"/>
      <div class="collection-container">
        <div class="container">
          <div class="segment-control">
            <segment-control @selection-region="updateRegion"></segment-control>
          </div>
          <div class="sorting-drop-down">
            <sorting-drop-down @selection-sort-option="updateSortOption"></sorting-drop-down>
          </div>
        </div>
        <small-side-bar ref="smallSideBar" class="small-side-bar" @selectedMonth="updateMonth" @selectedPeriod="sendPeriod" @period_range="updatePeriod"/>
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
import SmallSideBar from '../components/Program/SmallSideBar.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: "ProgramView",
  components: {
    Banner,
    SegmentControl,
    SortingDropDown,
    ProgramCollection,
    SideBar,
    SmallSideBar,
    FooterVue
  },
  data: function () {
    return {
      isTooSmallWindow: false,
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
      selectedPeriod: '',
      period_range: [0, 100],
      cells: [
        {
          id: 1,
          imgURL: require("@/assets/AboutMindful/mindfulProgram.jpg"),
          region: '속초',
          period: '2박 3일',
          period_days: 3,
          title: '리더들을 위한 마인드풀 워케이션',
          score: 10.0,
          startDate: '2022-12-14T00:00:00',
          date: '2022.12.14 - 12.16',
          tags: ['C-레벨', '자기탐색', '바다뷰', '네트워킹'],
          moveTo: "programdetailsokcho"
        },
        {
          id: 2,
          imgURL: require("@/assets/AboutRetreat/retreatProgram.jpg"),
          region: '영월',
          period: '2주',
          period_days: 14,
          title: '천천히 영월',
          score: 5.0,
          startDate: '2022-11-25T00:00:00',
          date: '2022.11.25 - 12.31',
          tags: ['임직원', '패러글라이딩', '별빛야경', '산속뷰'],
          moveTo: "programdetailyeongwol"
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
      this.selection = segment;
    },
    updateSortOption(option) {
      this.sortOption = option;
    },
    updateMonth(month) {
      this.selectedMonth = month;
      this.$refs.sideBar.selectedMonth = month
      this.$refs.smallSideBar.selectedMonth = month
    },
    updatePeriod(period) {
      this.period_range = period;
      this.$refs.sideBar.period_range = period;
      this.$refs.smallSideBar.period_range = period;
    },
    sendPeriod(period) {
      this.selectedPeriod = period;
      this.$refs.sideBar.selectedPeriod = period;
      this.$refs.smallSideBar.selectedPeriod = period;
    },
    handleResize() {
      this.isTooSmallWindow = window.innerWidth < window.screen.width * 0.4
      this.isSmallWindow = window.innerWidth < window.screen.width * 0.65 + 56
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.handleResize()
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
  position: inherit;
}
.side-bar {
  margin-top: 90px;
  margin-right: 56px;
}
.side-bar-hidden {
  display: none;
}
.collection-container {
  display: grid;
  width: 100%;
  padding-bottom: 167px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.program-collection {
  padding-top: 40px;
}
.small-side-bar {
    display: none;
  }
@media screen and (max-width: 768px) {
  .total-container {
    display: flex;
    justify-content: left;
  }
  .small-side-bar {
    display: unset;
  }
  .side-bar {
    display: none;
  }
}
</style>