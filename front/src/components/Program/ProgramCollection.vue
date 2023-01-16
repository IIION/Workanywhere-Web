<template>
    <div class="collection-view">
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
        cells: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        filteredCells() {
            if (this.selection === "ALL") return this.cells;
            return this.cells.filter(cell => cell.region === this.selection)
        },
        // computedWidth() {
        //     return this.isSmallWindow ? `${window.screen.width * 1/4}px` : `${window.screen.width * 1/2 + 56}px`
        // },
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
        }
    }
}
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
</style>