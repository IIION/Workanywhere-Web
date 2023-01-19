<template>
    <div>
        <div class="dropdown">
            <div class="dropdown-title" @click="toggleMenu">{{ selectedTitle }} <span class="arrow-down"></span></div>
            <ul v-if="showMenu" class="dropdown-list">
                <li :class="{ 'active': selectedTitle === '추천순' }" 
                    @click="selectOption('recommend')">추천순
                </li>
                <li :class="{ 'active': selectedTitle === '출발일순' }" 
                    @click="selectOption('startdate')">출발일순
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            showMenu: false,
            selectedTitle: '추천순'
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
        selectOption(option) {
            this.$emit('selection-sort-option', option)
            this.showMenu = false
            this.selectedTitle = option
            if (option === 'recommend') {
                this.selectedTitle = '추천순'
            } else if (option == 'startdate') {
                this.selectedTitle = "출발일순"
            }
        }
    }
}
</script>

<style scoped>
.dropdown {
    width: 105px;
    position: relative;
}
.dropdown-title {
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    /* float: left; */
    padding: 15px 10px 0px 10px;
    cursor: pointer;
    color: #666666;
}
.arrow-down:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #D9D9D9;
    display: inline-block;
}
.dropdown-list {
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    position: absolute;
    top: 100%;
    width: 100%;
    background: white;
    list-style: none;
    padding: 0;
    border: 1px solid #D9D9D9;
    z-index: 1;
}
.dropdown-list li {
    float: left;
    padding: 10px 10px 10px 19px;
    cursor: pointer;
}
.active {
    color: #FF4E31;
}
</style>