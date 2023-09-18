<template>
    
    <ul class="memberList">
        <li class="listItem" v-for="(item, index) in prop.membersdata" :key="index">
            <i class="material-icons">account_circle</i>
            <span>{{ item.username }}</span>
        </li>
    </ul>

</template>

<script setup>

import { defineProps } from 'vue'

const prop = defineProps({
    membersdata:{
        type: Array,
    }
})

</script>

<style>

.memberList{
    list-style: none;
    text-align: left;
}

.memberList .listItem{
    padding: 0.2rem 0.5rem ;
    display: flex;
}

.memberList .listItem i{
    color: rgb(150, 150, 150);
}

.memberList .listItem span{
    margin-left: 4px;
}

</style>