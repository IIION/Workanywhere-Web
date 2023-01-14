<template>
  <div class="card-container">
    <img :src="cardData.officeImg" class="office-image">
    <div class="office-info-container">
      <div>
        <p class="office-name">{{ cardData.officeName }}</p>
      <p class="office-description">{{ cardData.officeDescription }}</p>
      </div>
      
      <div>
        <div class="office-location-container">
        <img src="@/assets/ProgramDetailIcons/mappin.png">
        <p class="office-location">{{ cardData.location }}</p>
        </div>
        <div class="office-time-container">
          <img src="@/assets/ProgramDetailIcons/clock.png">
          <p class="office-time">{{ cardData.time }}</p>
        </div>
      </div>
      
    </div>
    <div class="detail-container">
      <p class="detail-container-title">업무 시설</p>
      <div class="detail-inner-container">
        <div v-for="detail in cardData.details" :key="detail.idx" class="detail-inner-info">
          <img :src="detail.imgURL" class="detail-image">
          <p class="detail-title">{{ detail.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramDetailOfficeCardVue",
  props: {
    cardData: Object
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  border: 1px solid #B1B1B1;
  border-radius: 20px;
  padding: 0;
}
.office-image {
  width: 40%;
  object-fit: cover;
  border-radius: 20px 0px 0px 20px;
}
.office-info-container {
  width: 40%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px;
}
.detail-container {
  width: 20%;
  margin: 22px;
  padding-left: 22px;
  border-left: 1px solid #B1B1B1;
}
.office-name {
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 0;
}
.office-description {
  font-size: 1.2rem;
}
.office-location-container {
  display: flex;
  margin-bottom: 7px;
}
.office-location-container > img {
  object-fit: contain;
  padding-right: 5px;
}
.office-location-container > p {
  color: #666666;
  margin: 0;
}
.office-time-container {
  display: flex;
}
.office-time-container > img {
  object-fit: contain;
  padding-right: 5px;
}
.office-time-container > p {
  color: #666666;
  margin: 0;
}



.detail-container-title {
  font-weight: 500;
  font-size: 1.5rem;
  text-align: left;
  margin-top: 0;
}
.detail-inner-container {
  display: grid;
  grid-template-columns: 50% 50%;
  
}
.detail-inner-info {
  display: flex;
  margin-top: 15px;
}
.detail-image {
  width: 20%;
  object-fit: contain;
}
.detail-title {
  width: 80%;
  text-align: left;
  padding-left: 5px;
  margin: 0;
}
</style>