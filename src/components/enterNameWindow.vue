<template>

    <div>
        <div class="enterNameWindowBackground"></div>

        <div class="enterNameWindow col-12 col-md-6 col-sm-8">

            <div class="title">請輸入名稱</div>
            <hr>
            <div class="input-group" style="margin-top: 1rem;">
                <input class="username form-control" v-model="inputElement" placeholder="請輸入名稱">
                <customButton style="--bor:0 4px 4px 0" @click="enterRoom">{{ inputElement==''?'請輸入名稱':'加入房間' }}</customButton>
            </div>
        </div>

    </div>

</template>

<script setup>
import { ref, defineEmits } from 'vue';
import customButton from './customButton.vue';

const inputElement = ref();

const emit = defineEmits(['username']);

const enterRoom = ()=>{
    emit('username', inputElement.value);
}

</script>

<style>

.enterNameWindowBackground{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    width: 100vw;
    height: 100vh;
    /* z-index: -1; */
}

.enterNameWindow{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 16px;
    background-color: #FFF;
    padding: 1rem 2rem;
    max-width: 90vw;
    margin: auto;
}

.title{
    font-size: 1.5rem;
    font-weight: bold;
}

.enterNameWindow input{
    border: none;
    background-color: #EEE;
    font-size: 1rem;
    border-radius: 8px;
    padding: 0.5rem 1rem;
}

input.username{
    border-radius: 4px 0 0 4px;
}

.enterNameWindow input:focus{
    /* outline: 2px solid rgb(255, 200, 100); */
    outline: none
}
</style>