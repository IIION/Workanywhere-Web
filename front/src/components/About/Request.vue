<template>
  <div class="request-container">
    <p class="request-description">워크애니웨어의 워케이션을 경험해 보고 싶다면 전문가에게 물어보세요!</p>
    <button @click="showConsulting">문의 하기</button>
  </div>
</template>

<script>
export default {
  name: "RequestVue",
  methods: {
    showConsulting() {
      this.$emit('showConsulting', true)
    }
  }
}
</script>

<style scoped>
.request-container {
  padding: 95px 15% 95px 15%;
  background-color: #ff4e31;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.request-description {
  font-weight: 700;
  color: #FFFBE3;
  font-size: 2.5rem;
  max-width: 50%;
}

button {
  margin-top: 30px;
  color: #FF4E31;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  padding: 12.5px 33.5px 12.5px 33.5px;
  border: 1.5px solid #FF4E31;
  border-radius : 50px;
  background-color: #FFFBE3;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .request-container {
    padding: 50px 5% 50px 5%;
    background-color: #ff4e31;
  }

.request-description {
    max-width: 100%;
  }
}
</style>