<template>
    <div>
        <div class="banner" >
            <h1 class="infoTitle">서비스 소개서를 받기 위해<br/>간단한 정보를 작성해주세요</h1>
            <img class="logoImg" src="@/assets/serviceLogo.png"/>
            <div class="closeButton"></div>
        </div>

        <div class="inputInfomation">
            <div>
                <div class="category-container">
                    <p class="category">회사명</p>
                    <p class="starmark">*</p>
                </div>
                <input type="text" class="inputBox" placeholder="회사명을 입력해주세요"/>
            </div>
            
            <div>
                <div class="category-container">
                    <p class="category">이름</p>
                    <p class="starmark">*</p>
                </div>
                <input type="text" class="inputBox" placeholder="이름을 입력해주세요"/>
            </div>
            
            <div>
                <div class="category-container">
                    <p class="category">직책</p>
                    <p class="starmark">*</p>
                </div>
                <input type="text" class="inputBox" placeholder="직책을 입력해주세요"/>
            </div>
        
            <div>
                <div class="category-container">
                    <p class="category">이메일</p>
                    <p class="starmark">*</p>
                </div>
                <input type="text" class="inputBox" placeholder="workanywhere@workanywhere.kr"/>
            </div>
        
            <div>
                <div class="category-container">
                    <p class="category">연락처</p>
                    <p class="starmark">*</p>
                </div>
                <input 
                type="text" 
                class="inputBox" 
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" 
                maxlength='11'
                placeholder="-를 제외하고 입력해주세요 "/>
            </div>
        
            <div>
                <div class="category-container">
                    <p class="category">워크애니웨어를 어떻게 알게되셨나요?</p>
                    <p class="starmark">*</p>
                </div>

                <select class="inputBox select"> 
                    <option disabled selected>워크애니웨어를 알게되신 곳을 선택해주세요</option>
                    <option value="지인의 추천">지인의 추천</option>
                    <option value="직군 커뮤니티를 통해 인지">직군 커뮤니티를 통해 인지</option>
                    <option value="외부 광고">외부 광고</option>
                    <option value="SNS(인스타그램)">SNS(인스타그램)</option>
                    <option value="기타">기타</option>
                </select>
            </div>
            <div>
                <input type="checkbox" class="radio-button"/>
                <label><a href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e">개인 정보 수집 및 이용</a><strong>에 동의</strong>합니다 (필수)</label><br/><br/>
                <input type="checkbox" class="radio-button"/>
                <label><a href="https://workanywherekr.notion.site/65f892d8b3164c8fa0c0858de043699e">워크애니웨어의 워케이션 소식 및 마케팅</a>에 대한 정보수신을 동의합니다. (선택)</label>
            </div>
        </div>
        <div class="submitButton">
            <p class="buttonText">소개서 받기</p>
        </div>
    </div>
</template>

<script>

</script>

<style>
.banner {
    background-color: #FF4E31;
    height : 266px;
    width : 100%;
    position: relative;
}

.infoTitle {
    color: #FFFBE3;
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    top: 50%;
    margin-top: -50px;
    margin-left: 92px;
}

.logoImg {
    margin-right: -50%;
}

.closeButton {
    position: absolute;
    right: 20px;
    top: 1px;
}

.closeButton:after {
    content: "\00d7";
    font-size: 30pt;
    color: #FFFBE3;
}

.category-container > p {
  display: inline;
}
.category {
  font-size: 1.3rem;
  font-weight: 500;
}
.starmark {
  color: #FB1515;
  vertical-align: top;
}

.inputBox {
      width: 100%;
      height: 25px;
      border: 1px solid #CACACA; 
      border-radius: 5px;
      padding-left: 10px;
}

.inputInfomation {
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 20px;
    padding: 70px;
    padding-left: 170px;
    padding-right: 170px;
}

.submitButton {
    display:inline-block;
    background-color: #ff4e31;
    border-radius: 50px;
    margin-bottom: 53px;
    margin-top: -10%;
    width: 170px;
}

.buttonText {
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    padding: 0px 20px 0px 20px;
}

.radio-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: 1px solid #FF4E31;
  margin-right: 10px;
  margin-bottom: -5px;
  position: relative;
  box-shadow: 0 0 0 1px #FF4E31;
}

.radio-button:checked {
  /* background-color: #FF4E31; */
}
</style>