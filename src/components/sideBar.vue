<template>

    <div class="sidebar" ref="sidebar">
        <div class="sidebarBackfround" @click="closeSideBar"></div>
        <div class="settingContainer">
            <div class="setting col-10 col-md-4 col-sm-8">
                <div style="text-align: right; padding: 0 1rem;">
                    <span class="closeSidebarButton" @click="closeSideBar">×</span>
                </div>
                <hr style="margin: 0;">
                <div class="content">
                    <span>列數:</span><input type="number" v-model="rowNum" min="1" @input="changeSetting">
                    <span>行數:</span><input type="number" v-model="colNum" min="1" @input="changeSetting">
                    
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, defineEmits } from 'vue';

const sidebar = ref()
const rowNum = ref(1);
const colNum = ref(1);

const emit = defineEmits(['changeSetting']);

const changeSetting = ()=>{
    console.log([rowNum.value, colNum.value]);
    emit('changeSetting', [rowNum.value, colNum.value]);
}

const closeSideBar = ()=>{
    sidebar.value.classList.remove("active");
}
</script>

<style>
.sidebar{
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: 10;
    transition: 0.3s;
    visibility: hidden;
}

.sidebar.active{
    visibility: visible;
}

.sidebar .sidebarBackfround{
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    left: 0;
    top: 0;
    backdrop-filter: blur(2px);
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}

.sidebar.active .sidebarBackfround{
    opacity: 1;
    visibility: visible;
}

.sidebar .settingContainer{
    filter: drop-shadow(0 0 2px #CCC);
}

.sidebar .setting{
    position: absolute;
    right: -100%;
    margin: 1rem;
    border-radius: 8px;
    background-color: white;
    height: calc(100vh - 2rem);
    transition: 0.3s ease-in-out;
    /* width: 500px; */
}

.sidebar.sidebar.active .setting{
    right: 0;
}

.sidebar .closeSidebarButton{
    cursor: pointer;
    font-size: 2rem;
}

.sidebar .content{
    display: grid;
    grid-template-columns: 5rem 1fr;
    padding: 0.5rem;
}

</style>