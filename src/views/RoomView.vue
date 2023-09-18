<template>
    <div class="container">
        <div>
            <span style="color: green; display: flex; justify-content: center; font-size: 1.2rem;" v-show="tableData.drawAuthSwitch"><i class="material-icons">check</i> 目前可搶籤</span>
            <span style="color: red; display: flex; justify-content: center; font-size: 1.2rem;" v-show="!tableData.drawAuthSwitch"><i class="material-icons">not_interested</i> 目前不可搶籤</span>
        </div>
        <div class="tableContainer table-responsive mt-1">
            <table class="table table-bordered">
                <thead class="table-light">
                    <tr>
                        <th>項目</th>
                        <th v-for="(item, index) in tableData.colName" :key="index" role="textbox" @input="e => dataChange(-1, index, e)" :contenteditable="peer.id != roomOwnerId?false:true">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData.rowName" :key="index">
                        <td :class="`table-light ${peer.id != roomOwnerId?'drawButton':''}`" @click="draw(index)" role="textbox" @input="e => dataChange(index, -1, e)" :contenteditable="peer.id != roomOwnerId?false:true">{{ item }}</td>
                        <td v-for="(d, colIndex) in tableData.data[index]" :key="colIndex" @input="event => dataChange(index, colIndex, event)" role="textbox" :contenteditable="peer.id != roomOwnerId?false:true">{{ d }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <sideBar ref="sideBarElement" @change-setting="settingChanged"></sideBar>

    <span class="functions">
        <span>
            <span><i class="material-icons" onclick="document.querySelector('.sidebar').classList.add('active');">settings</i></span>
            <span class="peopleButton" :data-num="idAndNames.length"><i class="material-icons">people</i></span>
            <span data-toggle="tooltip" data-tooltip="允許填寫!" @click="drawAuthSwitchChange(true)"><i class="material-icons">check</i></span>
            <span data-toggle="tooltip" data-tooltip="關閉填寫!" @click="drawAuthSwitchChange(false)"><i class="material-icons">not_interested</i></span>
        </span>
    </span>

    <enterNameWindow v-show="peer.id != roomOwnerId && !roomOwnerConnectBack" @username="enterName"></enterNameWindow>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import sideBar from '@/components/sideBar.vue';
import enterNameWindow from '@/components/enterNameWindow.vue';

const route = useRoute();
const store = useStore();
const tableData =ref({
    rowName: ["項目1"],
    colName: ["名額1"],
    data: [[""]],
    drawAuthSwitch: true,
})

console.log(route.params.id);

const sideBarElement = ref();
const roomOwnerId = route.params.id;
const peer = store.getters.getPeerjsObj;
// const drawAuthSwitch = ref(true);
const username = ref('');
const roomOwnerConnectBack = ref(false);
let interval;

const ids = ref([]);
const idAndNames = ref([]);
var conns = [];
var haveFiled = [];

onMounted(()=>{

    ids.value = [];
    conns = [];

    // setTimeout(()=>{
    //     console.log(peer.id);
    // }, 5000)

    // setInterval(() => {
    //     console.log(store.getters.getPeerjsObj.id);
    //     console.log(ids);
    //     console.log(conns);

    // }, 5000);

    interval = setInterval(() => {
        if(peer.id != null){
            clearInterval(interval);
            if(peer.id == roomOwnerId)
                interval = setInterval(() => {
                    sendMessage({
                        type: 'text',
                        data: JSON.stringify(tableData.value)
                    })

                    sendMessage({
                        type: 'usersList',
                        data: JSON.stringify(idAndNames.value)
                    })
                }, 1000);
        }else{
            console.log("not");
        }
    }, 1000);
    
    // setInterval(() => {
    //     console.log(tableData.value.data);
    // }, 2000);

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    // var bodyRect = document.body.getBoundingClientRect()
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        let el;
        tooltipTriggerEl.onmouseenter = ()=>{
            let rect = tooltipTriggerEl.getBoundingClientRect();
            el = document.createElement("div");
            // console.log(window.screen.height)
            el.className = "tooltip bs-tooltip-auto fade show";
            el.style = `position: absolute; inset: auto auto 0px 0px; margin: 0px; left:${rect.left}px; top: ${rect.bottom}px;`;
            el.innerHTML = `<div class="tooltip-arrow" style="position: absolute; left: 0px; transform: translate3d(28px, 0px, 0px);"></div><div class="tooltip-inner">${tooltipTriggerEl.dataset.tooltip}</div>`
            document.body.append(el);
        }

        tooltipTriggerEl.onmouseleave = ()=>{
            el.remove();
        }
        return el
    })


})

const enterName = (val)=>{
    if(peer.id == null)
        return;

    if(val == '' || val == undefined)
        return;

    // console.log(val);
    username.value = val;
    // conn2Peer(roomOwnerId);
    conn2Peer(JSON.stringify({
        id: roomOwnerId,
        username: '房主'
    }));
}

const drawAuthSwitchChange = (val)=>{
    if(peer.id != roomOwnerId){
        alert("您不是房主");
        return;
    }

    tableData.value.drawAuthSwitch = val;
}

const draw = (row)=>{
    sendMessage({
        type: 'draw',
        data: row
    })
}

const settingChanged = (data)=>{
    // data[0]: rowNum
    // data[1]: colNum
    console.log(data)
    if(data[0] < 1)
        data[0] = 1;

    if(data[1] < 1)
        data[1] = 1;
    // row 改變
    if(tableData.value.rowName.length < data[0]){
        let nowRowNum = tableData.value.rowName.length;
        for(let j = nowRowNum ; j < data[0] ; j++){
            tableData.value.rowName.push('新項目');

            let tempArr = []
            for(let i = 0 ; i < data[1] ; i++)
                tempArr.push('');
            
            tableData.value.data.push(JSON.parse(JSON.stringify(tempArr)));
        }

    }else{
        tableData.value.rowName = tableData.value.rowName.slice(0, data[0]);
        tableData.value.data = tableData.value.data.slice(0, data[0]);
    }

    // col 改變
    if(tableData.value.colName.length < data[1]){
        let nowColNum = tableData.value.colName.length;
        for(let j = nowColNum ; j < data[1] ; j++){
            tableData.value.colName.push('新名額');

            for(let i = 0 ; i < tableData.value.data.length ; i++)
                tableData.value.data[i].push('');
        }


    }else{
        tableData.value.colName = tableData.value.colName.slice(0, data[1]);
        for(let i = 0 ; i < tableData.value.data.length ; i++)
            tableData.value.data[i] = tableData.value.data[i].slice(0, data[1]);
    }
    console.log(tableData.value.data);

    // sendMessage({
    //     type: "text",
    //     data: JSON.stringify(tableData.value)
    // })

}

const dataChange = (row, col, e)=>{
    e.preventDefault();
    // console.log(e.target.textContent);
    if(row == -1)
        tableData.value.colName[col] = e.target.textContent.replace(/\n/gi, "");

    if(col == -1)
        tableData.value.rowName[row] = e.target.textContent.replace(/\n/gi, "");
        
    if(row != -1 && col != -1)
        tableData.value.data[row][col] = e.target.textContent.replace(/\n/gi, "");

    // sendMessage({
    //     type: "text",
    //     data: JSON.stringify(tableData.value)
    // })
}

watch(tableData.value, (val)=>{
    sendMessage({
        type: "text",
        data: JSON.stringify(val)
    })

})

peer.on('connection', function(conn) {

    conn.on('data', function(data){
        data = JSON.parse(data);
        // console.log(data);
        switch(data['type']){
            case 'conn':
                if(conn.peer == roomOwnerId)
                    roomOwnerConnectBack.value = true;

                conn2Peer(data['data']);
                break;

            case 'text':
                if(peer.id == roomOwnerId)
                    break;

                tableData.value = JSON.parse(data['data']);
                // console.log(data['data'])
                break;

            case 'draw':
                if(tableData.value.drawAuthSwitch == false)
                    break;

                // console.log(conn.peer);
                var drawUsername = '';
                // var drawUsername = idAndNames.map((item)=>{
                //     if(item.id == peer.id)
                //         return item.username;
                // })
                // console.log(drawUsername)
                for(let i = 0 ; i < idAndNames.value.length ; i++){
                    if(idAndNames.value[i].id == conn.peer){
                        drawUsername = idAndNames.value[i].username;
                        break;
                    }
                }

                if(haveFiled.includes(conn.peer))
                    break;

                var row = parseInt(data['data']);

                for(let i = 0 ; i < tableData.value.colName.length ; i++){
                    if(tableData.value.data[row][i] == ''){
                        tableData.value.data[row][i] = drawUsername;
                        haveFiled.push(conn.peer);
                        break;
                    }
                }
                

                break;

            case 'usersList':
                if(peer.id == roomOwnerId)
                    break;

                idAndNames.value = JSON.parse(data['data']);
                // console.log(data['data'])
                break;


            default:
                break;

        }
        
    });

});

//連接
function conn2Peer(data){

    let d = JSON.parse(data);
    let id = d['id'];
    let targetUsername = d['username'];

    if(ids.value.includes(id))
        return;

    console.log(id);
    ids.value.push(id);
    // store.dispatch('addId', {id: id});
    let tempObj = {
        id: id,
        username: targetUsername
    }
    idAndNames.value.push(JSON.parse(JSON.stringify(tempObj)))
    var conn = peer.connect(id);
    conn.on('open', function(){

        let allIdData = {
            "type": "conn",
            "data": JSON.stringify({
                id: peer.id,
                username: username.value
            })
        }
        conn.send(JSON.stringify(allIdData));

        conns.push(conn);
    });

}

//傳資料
function sendMessage(data){

    console.log(data)
    data = JSON.stringify(data);

    conns.forEach((conn)=>{

        conn.send(data);

    });

}

</script>

<style>

.container{
    margin-top: 1rem;
    padding-bottom: 15%;
}

.tableContainer{
    filter: drop-shadow(0 0 2px #DDD);
    border-radius: 16px;

}

.table{
    position: relative;
    /* left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
    /* width: 100%; */
    max-height: 60vh;
    /* max-width: 90vw; */
    /* display: flex; */
    /* flex-direction: row; */
    /* margin: auto; */
    /* justify-content: center; */
    /* background: #FFF; */
    /* padding: 1.5rem; */
    /* overflow: scroll; */
    /* width: fit-content; */
}
/* 
.table div{
    display: flex;
    flex-direction: column;
}

.table div span{
    display: block;
    height: 1.5rem;
    line-height: 1.5rem;
} */

table td, table th{
    white-space: nowrap;
    word-break: keep-all;
}

table input{
    outline: none;
}

table .drawButton{
    cursor: pointer;
    transition: 0.2s;
}

table .drawButton:hover{
    /* cursor: pointer; */
    outline: 4px solid rgba(255, 150, 100, 1);
}

.functions{
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    filter: drop-shadow(0 0 2px #DDD);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFF;
    border-radius: 99999px;
}

.functions > span{
    display: flex;
    flex-wrap: nowrap;
    /* background: #FFF; */
    padding: 0.5rem;
    border-radius: 99999px;
    height: 3rem;
    line-height: 3rem;

}

.functions > span > span{
    display: block;
    /* padding: 0.5rem 1rem; */
    border-radius: 50%;
    /* background: #DDD; */
    width: 36px;
    height: 36px;
    line-height: 36px;
    margin: 0 4px;
    transition: 0.2s;
    cursor: pointer;
    user-select: none;
}


.functions > span > span:hover, .functions > span > span.active{
    background: rgb(255, 210, 50);
}

.functions > span > span > i{
    line-height: 36px;
}

.functions .peopleButton{
    position: relative;
}

.functions .peopleButton::before{
    content: attr(data-num);
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
    font-size: 0.6rem;
    display: block;
    line-height: 1.6rem;
}


</style>