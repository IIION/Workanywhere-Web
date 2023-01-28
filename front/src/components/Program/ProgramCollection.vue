<template>
  <div class="collection-view" :style="{ width: computedWidth }">
    <div v-for="(cell, idx) in filteredCells" :key="idx">
      <CellVue
        :cellInfo="cell"
        :style="{ width: cellWidth}"
      />
    </div>
  </div>
</template>

<script>
import CellVue from "./Cell.vue";

export default {
  name: "ProgramCollection",
  components: {
    CellVue,
  },
  data: function () {
    return {
      isSmallWindow: false,
    };
  },
  props: {
    selection: {
      type: String,
      default: null,
    },
    sortOption: {
      type: String,
      default: null,
    },
    selectedMonth: {
      type: String,
      default: null,
    },
    period_range: {
      type: Array,
      default: null,
    },
    cells: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredCells() {
      // 1. 지역 filtering
      let filtered = this.cells;
      if (this.selection !== "ALL") {
        filtered = this.cells.filter((cell) => cell.region === this.selection);
      }
      // 2. 떠나는 달 filtering
      if (this.selectedMonth !== "") {
        let selectedMonth = this.selectedMonth.split("월")[0];
        filtered = filtered.filter((cell) =>
          this.checkMonth(selectedMonth, cell.date)
        );
      }
      // 3. 기간 filtering
      filtered = filtered.filter((cell) =>
        this.checkPeriod(cell.period_days, this.period_range)
      );
      // 4. sorting
      if (this.sortOption === "startdate") {
        filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      } else if (this.sortOption === "recommend") {
        filtered.sort((a, b) => b.score - a.score);
      }
      return filtered;
    },
    computedWidth() {
      return this.isSmallWindow
        ? `${(window.screen.width * 1) / 4}px`
        : `${(window.screen.width * 1) / 2 + 56}px`;
    },
    cellWidth() {
      if (window.screen.width < 768) {
        return `100%`;
      }
      return `${window.screen.width * 0.25}px`;
    },
    cellHeight() {
      return `${window.screen.width * 0.3}px`;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isSmallWindow = window.innerWidth < window.screen.width * 0.65 + 56;
    },
    checkMonth(selectedMonth, cellDate) {
      let dates = cellDate.split(" - ");
      let months = [dates[0].split(".")[1], dates[1].split(".")[0]];
      return months.includes(selectedMonth);
    },
    checkPeriod(period_days, range) {
      return period_days >= range[0] && period_days <= range[1];
    },
  },
};
</script>

<style scoped>
.collection-view {
  display: grid;
  grid-gap: 56px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .collection-view {
    width: 100%;
  }
}
</style>