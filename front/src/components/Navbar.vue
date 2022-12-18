<template>
  <div>
    <div class="navbar">
			<div class="left">
				<p id="1" :class="[selection === '1' ? 'selected' : 'common']" @click="moveToAboutPage">ABOUT</p>
				<p id="2" :class="[selection === '2' ? 'selected' : 'common']" @click="moveToProgramPage">프로그램</p>
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
  data: function() {
    return {
      selection: '0'
    }
  },
  methods: {
    moveToMain(event) {
      const targetId = event.currentTarget.id
      this.selection = targetId
      this.$router.push({name: "home"})
    },
    moveToProgramPage(event) {
      const targetId = event.currentTarget.id
      this.selection = targetId
      this.$router.push({name: "program"})
    },
    moveToAboutPage(event) {
      const targetId = event.currentTarget.id
      this.selection = targetId
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

.selected {
  font-weight: 700;
}

.common {
  font-weight: 400;
}

</style>