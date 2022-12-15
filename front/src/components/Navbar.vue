<template>
  <div>
    <div class="navbar">
			<div class="left">
				<p class="about" @click="moveToAboutPage">ABOUT</p>
				<p class="program" @click="moveToProgramPage">프로그램</p>
			</div>
			<img src="@/assets/logo.png" class="logoIcon" @click="moveToMain">
			<div class="right">
				<p class="login">로그인</p>
				<p class="signin">회원가입</p>
				<img src="@/assets/search.png" class="searchIcon">
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  methods: {
    moveToMain() {
      this.$router.push({name: "home"})
    },
    moveToProgramPage() {
      this.$router.push({name: "program"})
    },
    moveToAboutPage() {
      this.$router.push({name: "about"})
    }
  }
}
</script>

<style scoped>
p {
	margin-top: 10px;
	margin-bottom: 10px;
}
.navbar {
  background-color: rgb(255, 255, 255);
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 72px;
}
.left {
	display: flex;
	margin-left: 20%;
	align-items: center;
}
.right {
	display: flex;
	margin-right: 20%;
	align-items: center;
}
.logoIcon {
	height: 35px;
}
.left > p {
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 13px;
	margin-left: 15px;
	margin-right: 15px;
}
.searchIcon {
	height: 24px;
	width: 24px;
	margin-left: 6px;
}
.right > p {
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 13px;
	margin-left: 15px;
	margin-right: 15px;
}

</style>