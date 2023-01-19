<template>
    <div class="collection-view" :style="{ width: computedWidth }">
      <div v-for="(cell, idx) in filteredCells" :key="idx">
        <CellVue :cellInfo="cell" :style="{ width: cellWidth, height: cellHeight }"/>
      </div>
    </div>
</template>

<script>
import CellVue from './Cell.vue';

export default {
    name: "ProgramCollection",
    components: {
        CellVue
    },
    data: function() {
        return {
            isSmallWindow: false
        };
    },
    props: {
        selection: {
            type: String,
            default: null
        },
        sortOption: {
            type: String,
            default: null
        },
        selectedMonth: {
            type: String,
            default: null
        },
        period_range: {
            type: Array,
            default: null
        },
        cells: {
            type: Array,
            default: () => []
        }
    },
    computed: { // 지금 sortOption도 selection처럼 위에서 Binding해줘야 computed된다~!
        filteredCells() {
            console.log(this.selectedMonth)
            console.log(this.period_range[0])
            console.log(this.period_range[1])
            let filtered = this.cells;
            if (this.selection !== 'ALL') {
                filtered = this.cells.filter(cell => cell.region === this.selection);
            }

            filtered = filtered.filter(cell => this.checkPeriod(cell.period_days, this.period_range))

            if (this.sortOption === 'startdate') {
                // issue - safari 환경에서는 이 sorting이 먹히질않음. 
                filtered.sort((a, b) => new Date(a.date.split(' - ')[0]) - new Date(b.date.split(' - ')[0]));
            } else if (this.sortOption === 'recommend') {
                filtered.sort((a, b) => b.score - a.score);
            }
            return filtered;
        },
        computedWidth() {
            return this.isSmallWindow ? `${window.screen.width * 1/4}px` : `${window.screen.width * 1/2 + 56}px`
        },
        cellWidth() {
            return `${window.screen.width * 0.25}px`
        },
        cellHeight() {
            return `${window.screen.width * 0.3}px`
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize)
    },
    methods: {
        handleResize() {
            this.isSmallWindow = window.innerWidth < window.screen.width * 1/2 + 56
        },
        checkPeriod(period_days, range) {
            return period_days >= range[0] && period_days <= range[1]
        }
    }
}
</script>

<style scoped>
.collection-view {
    min-height: 350px;
    display: grid;
    grid-gap: 56px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}
</style>