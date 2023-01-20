<template>
  <div class="container">
    <p class="title">프로그램</p>
    <Program1 class="program-card"/>
    <Program2 class="program-card"/>
    <Program3 class="program-card"/>
    <Program4 class="program-card"/>
    <Program5 class="program-card"/>
    <p class="sub-info">지역 및 부대시설에 따라 프로그램은 변경될 수 있습니다</p>
  </div>
</template>

<script>
import Program1 from './Program1.vue';
import Program2 from './Program2.vue';
import Program3 from './Program3.vue';
import Program4 from './Program4.vue';
import Program5 from './Program5.vue';

export default {
  name: "ProgramDetailProgramsVue",
  components: {
    Program1,
    Program2,
    Program3,
    Program4,
    Program5
  }
}
</script>

<style scoped>
.container {
  padding: 30px 0px 30px 0px;
}
.title {
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
}
.program-card {
  margin: 10px 0px 0px 0px;
}
.sub-info {
  margin: 30px 0px 0px 0px
}
</style>