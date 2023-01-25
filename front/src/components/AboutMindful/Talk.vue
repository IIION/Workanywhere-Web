<template>
  <div class="talk-container">
    <div>
      <div class="talk-left">
        <p>
          “나 지금 잘하고 있는거 맞나? 잠시 멈춰서 생각을 한 번 정리해보고 싶은데.."
        </p>
      </div>
    </div>
    <div>
      <div class="talk-right">
        <p>“리더로서 짊어진 압박감과 책임감 때문에 가끔 외롭기도 해”</p>
      </div>
    </div>
    <div>
      <div class="talk-left">
        <p>“바빴던 올해를 정리하고, 다가오는 새해를 의미있게 맞이하고 싶어”</p>
      </div>
    </div>
    <div>
      <div class="talk-right">
        <p>
          “일을 손에서 놓을 순 없지만, 잠시만이라도 몸과 마음이 평온했으면..”
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalkVue",
};
</script>

<style scoped>
.talk-container {
  background-color: #f7f6f5;
  padding: 50px 15% 50px 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.talk-container > div {
  width: 100%;
  display: flex;
  margin: 15px 0px 15px 0px;
}

.talk-container > div:nth-child(1) {
  justify-content: left;
}
.talk-container > div:nth-child(2) {
  justify-content: right;
}
.talk-container > div:nth-child(3) {
  justify-content: left;
}
.talk-container > div:nth-child(4) {
  justify-content: right;
}
.talk-left {
  display: inline-block;
  background-color: #ffffff;
  border-radius: 0px 36.5px 36.5px 36.5px;
  padding: 0px 15px 0px 15px;
}
.talk-right {
  display: inline-block;
  justify-content: right;
  background-color: #fffbe3;
  border-radius: 36.5px 0px 36.5px 36.5px;
  padding: 0px 15px 0px 15px;
}
p {
  font-size: 1.5rem;
  color:#666666;
}
@media screen and (max-width: 768px) {
  .talk-container {
    background-color: #f7f6f5;
    padding: 30px 5% 30px 5%;
  }
  .talk-right {
    width: 100%;
    background-color: #fffbe3;
    border-radius: 36.5px 0px 36.5px 36.5px;
    padding: 0px 15px 0px 15px;
  }
  .talk-left {
    width: 100%;
    background-color: #ffffff;
    border-radius: 0px 36.5px 36.5px 36.5px;
    padding: 0px 15px 0px 15px;
  }
}

</style>