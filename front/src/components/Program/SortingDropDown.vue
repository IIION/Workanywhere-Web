<template>
    <div>
        <div class="dropdown">
            <div class="dropdown-title" @click="toggleMenu">{{ selectedTitle }}
                <i class="fas fa-chevron-down"></i>
            </div>
            <ul v-if="showMenu" class="dropdown-list">
                <li @click="selectOption('recommend')">추천순</li>
                <li @click="selectOption('startdate')">출발일순</li>
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
            this.$emit('select', option)
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
    width: 100px;
    position: relative;
}
.dropdown-title {
    padding: 10px;
    cursor: pointer;
}
.dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid gray;
    z-index: 1;
}
.dropdown-list li {
    padding: 10px;
    cursor: pointer;
}
</style>