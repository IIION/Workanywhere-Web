<template>
  <div class="review-container">
    <div class="inner-container">
      <div>
        <p class="title">{{review.title}}</p>
        <p class="detail">{{review.detail}}</p>
      </div>
      
      <div class="userinfo">
        <p class="job">{{review.job}} </p>
        <p class="name">{{review.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewDetailVue",
  props: {
    review: Object,
  }
}
</script>

<style scoped>
.review-container {
  background-color: white;
  border-radius: 20px;
  
}

.inner-container{
  padding: 26px 30px 26px 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.point {
  font-family: 'Secular One', sans-serif;
  font-size: 3rem;
  color: #FF4E31;
  margin: 0;
}

.title {
  font-weight: 700;
  font-size: 1.5rem;
  min-height: 50px;
}

.detail {
  color: #666666;
  font-weight: 400;
  font-size: 1rem;
}

.userinfo{
  text-align: end;
}

.job {
  color: #666666;
  font-weight: 400;
  font-size: 1rem;
  display: inline;
}

.name {
  font-weight: 500;
  font-size: 1rem;
  display: inline;
}

</style>