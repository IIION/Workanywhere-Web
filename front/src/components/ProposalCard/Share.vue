<template>
<div id="border">
  <div>
<!--    close    -->
    <button id="xButton">
      <img src="./src/assets/ShareAsset/xMark.png">
    </button>
  </div>

  <div id="textArea">
    <p class="shareText">주변 동료와 가족분들에게</p>
    <p class="shareText">공유해보세요</p>
  </div>

  <div style="margin-top: 36px">
    <button id="linkCopyButton">
      <img src="./src/assets/ShareAsset/linkCopy.png" style="margin-right: 5px">
      <p id="linkCopyText">링크복사</p>
    </button>
  </div>

</div>
</template>

<script>
export default {
  name: "ShareVue"
}
</script>

<style scoped>

#border {
  width: 367px;
  height: 263px;

  background-color: white;
  border-radius: 20px;

  padding: 31px 21px 39px;

  display: flex;
  flex-direction: column;
}

#textArea {
  display: flex;
  flex-direction: column;
  align-content: center;

  margin-top: 15px;
}

#xButton {
  float: right;
  border-width: 0px;
  background-color: rgba(255, 255, 255, 0)
}

.shareText {
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
}

#linkCopyButton {
  width: 100%;
  height: 47px;
  border-width: 0px;
  border-radius: 10px;
  background-color: #D9D9D9;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#linkCopyText {
  font-size: 14px;
  color: #191919;
}

</style>