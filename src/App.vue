<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<script setup>
// import { useStore } from 'vuex';

import { onMounted } from 'vue'
// import { Peer } from "peerjs";

// const store = useStore();

// const peer = store.getters.getPeerjsObj;

onMounted(()=>{
    // setInterval(() => {
    //   console.log(store.getters.getPeerjsObj.id)

    // }, 5000);

})

</script>

<style>

:root{
  --yellow: rgb(255, 210, 50);
}

body{
  background-color: rgb(250, 250, 250);

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#app::-webkit-scrollbar{
    width: 4px;
}

#app::-webkit-scrollbar-track{
    background: transparent; 
}

#app::-webkit-scrollbar-thumb{
    background: #888; 
}

#app::-webkit-scrollbar-thumb:hover{
    background: #555; 
}

</style>
