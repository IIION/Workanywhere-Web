<template>
  <div class="container">
    <div class="texts">
      <p>새로운 근무 문화를 경험해보고 싶다면</p>
      <p>워크애니웨어의</p>
      <p>서비스 소개서를 받아보세요</p>
      <button @click="showServiceApply">소개서 받기</button>
    </div>
    <div class="image-container">
      <img src="@/assets/Home/documentImage.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProposalVue",
  methods: {
    showServiceApply() {
      this.$emit('showServiceApply', true)
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #FF4e31;
  position: relative;
  padding: 100px 15% 100px 15%;
  overflow: hidden;
}

.texts {
  text-align: left;
}

.texts > p {
  margin: 0;
  font-weight: 700;
  font-size: 2.5rem;
  color: #FFFBE3;
}

.image-container {
  height: 100%;
  position: absolute;
  top: 20px;
  right: 15%;
}
.image-container > img {
  display: block;
  height: 100%;
}

button {
  margin-top: 30px;
  color: #FFFBE3;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  padding: 12.5px 33.5px 12.5px 33.5px;
  border: 1.5px solid #FFFBE3;
  border-radius : 50px;
  background-color: rgba( 255, 255, 255, 0);
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 50px 10% 150px 10%;
  }
  .image-container {
    height: 40%;
    top: unset;
    bottom: -20px;
    right: 10%;
  }
}
</style>