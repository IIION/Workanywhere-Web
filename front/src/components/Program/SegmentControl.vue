<template>
  <div class="segment">
    <button
      v-for="(segment, idx) in segments"
      :key="segment"
      @click="updateSelection(segment, idx)"
      :class="{ active: segment === selection }"
      :style="{
        fontWeight: idx === selectionIdx ? 700 : 400,
      }"
    >
      {{ segment }}
    </button>
  </div>
</template>

<script>
export default {
  name: "SegmentControl",
  data: function () {
    return {
      segments: ["ALL", "속초", "영월"],
      selection: "ALL",
      selectionIdx: 0,
    };
  },
  methods: {
    updateSelection(segment,idx) {
      this.selection = segment;
      this.selectionIdx = idx
      this.$emit("selection-region", this.selection);
    },
  },
};
</script>

<style scoped>
.segment {
  margin-top: 85px;
  display: flex;
  justify-content: center;
}

button {
  height: 43px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.3rem;
  padding: 5px 20px 5px 20px;
  border: none;
  border-radius: 50px;
  color: #666666;
  background-color: #f7f6f5;
  cursor: pointer;
}
.active {
  color: white;
  background-color: #ff4e31;
}
@media screen and (max-width: 768px) {
  .segment {
    margin-top: 20px;
  }
}
</style>