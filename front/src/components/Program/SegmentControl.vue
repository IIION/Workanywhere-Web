<template>
    <div class="segment">
        <button v-for="(segment, idx) in segments" 
            :key="segment" 
            @click="updateSelection(segment)"
            :class="{ 'active': segment === selection }"
            :style="{
                 fontFamily: idx === 0 ? 'Montserrat' : 'Noto Sans KR',
                 fontWeight: idx === 0 ? 'bold' : 'normal'
            }"
        >
        {{ segment }}
        </button>
    </div>
</template>

<script>
export default {
    name: "SegmentControl",
    data: function() {
        return {
            segments: ['ALL', '속초', '영월'],
            selection: 'ALL'
        }
    },
    methods: {
        updateSelection(segment) {
            this.selection = segment
            this.$emit('selection', this.selection)
            console.log(segment)
        }
    }
}
</script>

<style scoped>
.segment {
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
}

button {
    width: 80.0px;
    height: 43.0px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20.0px;
    padding: 5.0px 15.0px 5.0px 15.0px;
    border: none;
    border-radius : 50px;
    color: #666666;
    background-color: #F7F6F5;
}
.active {
    color: white;
    background-color: #FF4E31;
}
</style>