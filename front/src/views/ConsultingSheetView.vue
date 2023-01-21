<template>
    <div>
        <label>워케이션 컨설팅<br/>문의하기</label>
        <div class="form-row">
            <div class="name-label">
                <div class="tagdiv">
                    <label for="office" class="tag">회사명</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="office" placeholder="회사명을 입력해주세요" required>
            </div>
            <div class="name-label">
                <div class="tagdiv">
                    <label for="name" class="tag">이름</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="name" placeholder="이름을 입력해주세요" required>
            </div>
            <div class="name-label">
                <div class="tagdiv">
                    <label for="role" class="tag">직책</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="role" placeholder="직책을 입력해주세요" required>
            </div>
            <div class="name-label">
                <div class="tagdiv">
                    <label for="email" class="tag">이메일</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="email" placeholder="workanywhere@workanywhere.kr" required>
            </div>
            <div class="name-label">
                <div class="tagdiv">
                    <label for="contact" class="tag">연락처</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="contact" placeholder="-를 제외하고 입력해주세요" required>
            </div>
            <div class="name-label">
                <div class="tagdiv">
                    <label for="how" class="tag">워크애니웨어를 어떻게 알게되셨나요?</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="how" placeholder="워크애니웨어를 알게되신 곳을 선택해주세요" required>
            </div>
            <div class="name-label">
                <div class="tagdiv">
                    <label for="role-type" class="tag">근무형태</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="role-type" placeholder="현재 회사의 근무 형태를 선택해주세요" required>
            </div>
            <div class="name-label">
                <div class="tagdiv">
                    <label for="num" class="tag">기업 인원 수</label>
                    <label class="star"> *</label>
                </div>
                <input type="text" class="form-control" id="num" placeholder="기업 인원 수를 선택해주세요" required>
            </div>
        </div>
        <div class="bottom-area">
            <label>개인 정보 수집 및 이용에 동의합니다 (필수)</label>
            <label>워크애니웨어의 워케이션 소식 및 마케팅에 대한 정보수신을 동의합니다. (선택)</label>
            <button type="submit">문의하기</button>
        </div>
    </div>
</template>

<style scoped>
.form-row {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    grid-template-rows: repeat(4, 100px);
    grid-column-gap: 70px;
    grid-row-gap: px;
    padding: 70px 100px;
}

.name-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.bottom-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.tag {
    font-size: 18px;
    font-weight: 700;
}

.star {
    font-size: 22px;
    font-weight: 700;
    color: #ff0000;
}

.form-control {
    padding: 14px 0px 14px 16px;
    font-size: 16px;
    width: 400px;
    border-radius: 10px;
    border: 1px solid #CACACA;
}
</style>