<template>
    <div class="collection-view">
      <div v-for="(cell, idx) in filteredCells"
        :key="idx">
        <CellVue class="cell" :cellInfo="cell"/>
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
    props: {
        selection: {
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
            console.log(this.selection)
            if (this.selection === "ALL") return this.cells;
            return this.cells.filter(cell => cell.region === this.selection)
        }
    }
}
</script>

<style scoped>
.collection-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.cell {
    /* width: 429px; */
    width: 22vw;
    height: 27.5vw;
}
</style>