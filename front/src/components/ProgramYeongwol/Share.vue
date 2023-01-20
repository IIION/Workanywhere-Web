<template>
    <div id="border">
      <div>
    <!--    close    -->
        <button id="xButton" @click="showShareCard">
          <img src="@/assets/ShareAsset/xMark.png">
        </button>
      </div>
      
      <div id="textArea">
        <p class="shareText">주변 동료와 가족분들에게</p>
        <p class="shareText">공유해보세요</p>
      </div>
    
      <div style="margin-top: 36px">
        <button id="linkCopyButton" @click="copyURL">
          <img src="@/assets/ShareAsset/linkCopy.png" style="margin-right: 5px">
          <p id="linkCopyText">링크복사</p>
        </button>
      </div>
    
    </div>
    </template>
    
    <script>
    export default {
      name: "ProgramYeongwolShareVue",
      methods: {
        showShareCard() {
          this.$emit('showShareCard', false)
        },
        async copyURL() {
          try {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            this.$emit('showShareCard', false)
          } catch (err) {
            console.error('복사 에러: ', err);
          }
        }
      }
    }
    </script>
    
    <style scoped>
    
    #border {
      width: 30vw;
      height: 30vh;
      border: 1px solid #D9D9D9;
      background-color: white;
      border-radius: 20px;
    
      padding: 31px 21px 39px;
    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
      background-color: rgba(255, 255, 255, 0);
      cursor: pointer;
    }
    
    .shareText {
      font-size: 20px;
      font-weight: bold;
      color: black;
      text-align: center;
      margin:0;
    }
    
    #linkCopyButton {
      width: 100%;
      height: 47px;
      border-width: 0px;
      border-radius: 10px;
      background-color: #F7F6F5;
    
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    
    #linkCopyText {
      font-size: 14px;
      color: #191919;
    }
    
    </style>