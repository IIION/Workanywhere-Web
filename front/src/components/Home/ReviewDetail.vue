<template>
  <div class="review-container">
    <div class="inner-container">
      <p class="title">{{review.title}}</p>
      <p class="detail">{{review.detail}}</p>
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
  },
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