<template>
    <div class="collection-view">
      <div v-for="(cell, idx) in filteredCells"
        :key="idx">
        <div class="cell">{{ cell.title }}</div>
      </div>
    </div>
</template>

<script>
export default {
    name: "ProgramCollection",
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
