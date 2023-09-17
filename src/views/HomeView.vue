<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

        <div class="createWindow col-12 col-md-6 col-sm-8">
            <div class="title">創建/加入房間</div>
            <div>您的ID: {{ peerid }}</div>
            <hr>
            <div class="input-group" style="margin-top: 1rem;">
                <input class="roomname form-control" v-model="inputElement" placeholder=" 請輸入房間ID">
                <customButton style="--bor:0 4px 4px 0" @click="enterRoom">{{ inputElement==''?'創建房間':'加入房間' }}</customButton>
            </div>
        </div>

	</div>
</template>

<script setup>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import customButton from '@/components/customButton.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const inputElement = ref('');

const router = useRouter();

const store = useStore();
const peerid = ref('');

onMounted(()=>{
    let interval;
    interval = setInterval(() => {
        if(store.getters.getPeerjsObj.id != null){
            peerid.value = store.getters.getPeerjsObj.id;
            clearInterval(interval);
        }
    }, 1000);

    store.dispatch('newPeerObj');
    
})

const enterRoom = ()=>{
    if(inputElement.value == ''){
        router.push({
            name: 'joinRoom',
            params: {id: peerid.value}
        })
    }else{
        router.push({
            name: 'joinRoom',
            params: {id: inputElement.value}
        })
    }
}

</script>

<style>

.home{
    /* position: relative; */
    filter: drop-shadow(0 0 2px #DDD);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

}
.createWindow{
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

.createWindow input{
    border: none;
    background-color: #EEE;
    font-size: 1rem;
    border-radius: 8px;
    padding: 0.5rem 1rem;
}

input.roomname{
    border-radius: 4px 0 0 4px;
}

.createWindow input:focus{
    /* outline: 2px solid rgb(255, 200, 100); */
    outline: none
}
</style>