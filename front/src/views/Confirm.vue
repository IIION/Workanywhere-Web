<template>
  <div id="border" style="background-color: white">
    <div>
      <b style="font-size: 23pt; color: black; font-weight: bold">990,000원</b>
    </div>

    <div id="selectionArea">
      <div class="selectionUnit">
        <p class="selectionTitle" name="date">날짜</p>
        <select class="select">
          <option class="selectOption" value="">옵션 선택</option>
          <option class="selectOption" value="">12월 14일 ~ 16일(2박 3일)</option>
        </select>
      </div>

      <div class="selectionUnit">
        <p class="selectionTitle" name="count">인원</p>
        <select class="select">
          <option class="selectOption" value="">1명</option>
        </select>
      </div>
    </div>

    <div id="buttonArea">
      <button class="buttonUnit" id="applyButton">신청하기</button>
      <button class="buttonUnit" id="shareButton">
        <p style="margin-right: 5px">공유</p>
        <img src="./src/assets/ConfirmAsset/share.png"/>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "choice"
}
</script>

<style scoped>

#border {
  width: 387px;
  height: 455px;
  background-color: white;

  border-width: 3px;
  border-style: solid;
  border-radius: 20px;
  border-color: #D9D9D9;

  padding: 43px 21px 44px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

#selectionArea {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 173px;
}

.selectionUnit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 78px;
}

.selectionTitle {
  color: black;
  font-size: 14px;
}

.select {
  font-size: 14px;
  color: #666666;
}

select {
  width: 100%;
  padding: .8em .5em;
  border: 1px solid #D9D9D9;
  background: url("@/assets/ConfirmAsset/arrow.png") no-repeat 95% 50%;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select::-ms-expand {
  display: none;
}

#buttonArea {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 103px;
}

.buttonUnit {
  height: 47px;
  border-width: 0px;
  border-radius: 10px;
  font-size: 14px;
}

#applyButton {
  background-color: #FF4E31;
  color: #FEFEFE;
}

#shareButton {
  background-color: #F7F6F5;
  color: #FF4E31;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>