<template>

    <div class="qrcodeDisplayWindowConatiner close">
        <div class="qrcodeDisplayWindowBackground"></div>

        <div class="qrcodeDisplayWindow col-12 col-md-6 col-sm-8">

            <div class="title">房間QR Code</div>
            <span class="closeButton" onclick="document.querySelector('.qrcodeDisplayWindowConatiner').classList.add('close')">×</span>
            <hr>
            <div class="input-group" style="margin-top: 1rem;">
                <img style="margin: auto;" :src="`https://chart.googleapis.com/chart?cht=qr&chs=256x256&chl=${props.url}`">
            </div>
        </div>

    </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    url:{
        type: String
    }
});

</script>

<style>

.qrcodeDisplayWindowConatiner.close{
    display: none;
}

.qrcodeDisplayWindowBackground{
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

.qrcodeDisplayWindow{
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

.closeButton{
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    right: 32px;
    top: 0.5rem;
}

</style>