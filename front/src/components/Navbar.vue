<template>
  <div>
    <div class="navbar">
    <div @click="toggleHamberger" class="hamburger">
      <div :class="[showMenu ? 'active-line':'line']"></div>
      <div :class="[showMenu ? 'active-line':'line']"></div>
      <div :class="[showMenu ? 'active-line':'line']"></div>
    </div>

    <ul class="nav-links">
      <li><p id="1" :class="[selection === '1' ? 'selected' : 'common']" @click="moveToAboutPage">ABOUT</p></li>
      <li><p id="2" :class="[selection === '2' ? 'selected' : 'common']" @click="moveToProgramPage">프로그램</p></li>
    </ul>
    <img id="0" src="@/assets/logo.png" class="logoIcon" @click="moveToMain">
    <div class="empty">
    </div>
    
  </div>

  <div class="sidebar" style="margin-top:70px;" v-if="showMenu">
    <p id="1" @click="moveToAboutPage">ABOUT</p>
    <hr style="background:#B1B1B1; height: 1px; border:0;">
    <p id="2" @click="moveToProgramPage">프로그램</p>
    <hr style="background:#B1B1B1; height: 1px; border:0;">
  </div>

  </div>

</template>

<script>
export default {
  name: 'NavigationBar',
  data: function() {
    
    return {
      selection: '0',
      showMenu: false
    }
  },
  methods: {
    moveToMain(event) {
      const targetId = event.currentTarget.id
      this.selection = targetId
      this.showMenu = false
      this.$router.push({name: "home"})
    },
    moveToProgramPage(event) {
      const targetId = event.currentTarget.id
      this.selection = targetId
      this.showMenu = false
      this.$router.push({name: "program"})
    },
    moveToAboutPage(event) {
      const targetId = event.currentTarget.id
      this.selection = targetId
      this.showMenu = false
      this.$router.push({name: "about"})
    },
    toggleHamberger() {
      // active, inactive 조건으로 구분해주기.
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>

.navbar {
  background-color: rgb(255, 255, 255);
	position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.logoIcon {
	height: 35px;
  cursor: pointer;
}

#icon {
  display: none;
}

.nav-links {
	display: flex;
	align-items: center;
  justify-content: center;
  padding: 0;
  width: 40%;
}

.nav-links li {
  list-style: none;
}

.nav-links li p {
  font-size: 13px;
  margin: 0px 15px 0px 15px;
  cursor: pointer;
}

.selected {
  font-weight: 700;
}

.common {
  font-weight: 400;
}

.empty {
  width: 40%;
}

.hamburger {
  width: 25px;
  margin-left: 30px;
  display: none;
  cursor: pointer;
  position: relative;
}

.line {
  width: 100%;
  height: 2px;
  background-color: #FF4E31;
  margin: 5px;
  position: absolute;
}

.line:nth-child(1) {
  top: 0;
}

.line:nth-child(2) {
  top: 50%;
  margin-top: -1px;
}

.line:nth-child(3) {
  bottom: 0;
}

.active-line {
  width: 100%;
  height: 2px;
  background-color: #FF4E31;
  position: absolute;
}

.active-line:nth-child(1) {
  top: 50%;
  transform: rotate(45deg);
}

.active-line:nth-child(2) {
  opacity: 0;
}

.active-line:nth-child(3) {
  top: 50%;
  transform: rotate(-45deg);
}

.sidebar {
  background: white;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  z-index: 1;
}

.sidebar > p {
  text-align: left;
  padding-left: 30px;
  font-size: 1.5rem;
}

@media screen and (max-width: 768px) {
  .navbar {
    justify-content: space-between;
  }

  .nav-links {
    display: none;
  }

  .nav-links li {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .empty {
    width: 25px;
  }

}
</style>