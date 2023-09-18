<template>

    <div class="sidebar" ref="sidebar">
        <div class="sidebarBackfround" @click="closeSideBar"></div>
        <div class="settingContainer">
            <div class="setting col-10 col-md-4 col-sm-8">
                <div style="text-align: right; padding: 0 1rem;">
                    <span class="closeSidebarButton" @click="closeSideBar">×</span>
                </div>

                <div class="switcher">
                    <span :class="mode==0?'active':''" @click="changeTab(0)">設定</span>
                    <span :class="mode==1?'active':''" @click="changeTab(1)">成員</span>
                </div>

                <hr style="margin: 0 4px;">

                <div class="content">
                    <section class="settingTab" ref="settingTab" :hidden="!mode==0">
                        <span>列數:</span><input type="number" v-model="rowNum" min="1" @input="changeSetting">
                        <span>行數:</span><input type="number" v-model="colNum" min="1" @input="changeSetting">
                    </section>

                    <section class="memberTab" ref="memberTab" :hidden="!mode==1">
                        <memberList :membersdata="prop.membersdata"></memberList>
                    </section>
                    
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, defineEmits, defineProps, defineExpose } from 'vue';
import memberList from './memberList.vue';

const sidebar = ref()
const rowNum = ref(1);
const colNum = ref(1);

const settingTab = ref()
const memberTab = ref();
const mode = ref(0);

const prop = defineProps({
    membersdata:{
        type: Array
    }
})

const emit = defineEmits(['changeSetting']);

const changeSetting = ()=>{
    console.log([rowNum.value, colNum.value]);
    emit('changeSetting', [rowNum.value, colNum.value]);
}

const closeSideBar = ()=>{
    sidebar.value.classList.remove("active");
}

const changeTab = (val)=>{
    mode.value = val
}

defineExpose({
    changeTab
})

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
    position: relative;
}

.sidebar .content .settingTab{
    position: relative;
    display: grid;
    grid-template-columns: 5rem 1fr;
    padding: 0.5rem;
}

.sidebar .content .memberTab{
    position: relative;

}

.sidebar .switcher{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 4px;
}

.sidebar .switcher span{
    transition: 0.2s;
    cursor: pointer;
    border-radius: 4px 4px 0 0;
}

.sidebar .switcher span.active{
    background-color: var(--yellow);
}

.sidebar .switcher span:hover{
    background-color: rgb(230, 230, 230);
}

.sidebar .switcher span.active:hover{
    background-color: var(--yellow);
}

</style>