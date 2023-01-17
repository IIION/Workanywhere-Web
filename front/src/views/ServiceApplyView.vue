<template>
    <div>
        <div class="banner" >
            <h1 class="infoTitle">서비스 소개서를 받기 위해<br/>간단한 정보를 작성해주세요</h1>
            <img class="logoImg" src="@/assets/serviceLogo.png"/>
            <div class="closeButton"></div>
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

</style>