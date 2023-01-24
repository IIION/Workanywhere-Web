<template>
  <div class="partners-wrapper">
    <div class="title">
      <p>많은 기업과 조직들이</p>
      <p>워크애니웨어의 워케이션을</p>
      <p>경험해 나가고 있습니다</p>
    </div>
    <div class="logos">
      <img src="@/assets/Home/naverLogo.png">
      <img src="@/assets/Home/LineLogo.png">
      <img src="@/assets/Home/BrunelLogo.png">
      <img src="@/assets/Home/DeBlurLogo.png">
      <img src="@/assets/Home/CalmenTechLogo.png">
      <img src="@/assets/Home/LucidLabLogo.png">
      <img src="@/assets/Home/YoyomoLogo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnersVue",
}
</script>

<style scoped>
.partners-wrapper {
  padding: 100px 0px 100px 0px;
}
.title {
  padding-bottom: 40px;
}

.title > p {
  font-weight: 700;
  margin:0;
  font-size: 2.5rem;
}
.logos {
  padding: 0px 15% 0px 15%;
}

.logos > img {
  padding: 0px 15px 15px 15px;
  height: 70px;
}

@media screen and (max-width: 768px) {
  .logos {
    padding: 0;
  }
  .logos > img {
    height: 35px;
  }
}

</style>