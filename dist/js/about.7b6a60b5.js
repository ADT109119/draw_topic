"use strict";(self["webpackChunkdraw_topic"]=self["webpackChunkdraw_topic"]||[]).push([[443],{833:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(3396);const n={class:"about"},o=(0,l._)("h1",null,"This is an about page",-1),i=[o];function s(e,t){return(0,l.wg)(),(0,l.iD)("div",n,i)}var r=a(89);const u={},c=(0,r.Z)(u,[["render",s]]);var d=c},7556:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});a(7658);var l=a(3396),n=a(9242),o=a(4870),i=a(7139),s=a(2483),r=a(65);const u={class:"settingContainer"},c={class:"setting col-10 col-md-4 col-sm-8"},d=(0,l._)("hr",{style:{margin:"0"}},null,-1),v={class:"content"},p=(0,l._)("span",null,"列數:",-1),m=(0,l._)("span",null,"行數:",-1);var g={__name:"sideBar",emits:["changeSetting"],setup(e,{emit:t}){const a=(0,o.iH)(),i=(0,o.iH)(1),s=(0,o.iH)(1),r=()=>{console.log([i.value,s.value]),t("changeSetting",[i.value,s.value])},g=()=>{a.value.classList.remove("active")};return(e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"sidebar",ref_key:"sidebar",ref:a},[(0,l._)("div",{class:"sidebarBackfround",onClick:g}),(0,l._)("div",u,[(0,l._)("div",c,[(0,l._)("div",{style:{"text-align":"right",padding:"0 1rem"}},[(0,l._)("span",{class:"closeSidebarButton",onClick:g},"×")]),d,(0,l._)("div",v,[p,(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),min:"1",onInput:r},null,544),[[n.nr,i.value]]),m,(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),min:"1",onInput:r},null,544),[[n.nr,s.value]])])])])],512))}};const f=g;var _=f,w=a(7585);const h=(0,l._)("div",{class:"enterNameWindowBackground"},null,-1),b={class:"enterNameWindow col-12 col-md-6 col-sm-8"},y=(0,l._)("div",{class:"title"},"請輸入名稱",-1),N=(0,l._)("hr",null,null,-1),S={class:"input-group",style:{"margin-top":"1rem"}};var k={__name:"enterNameWindow",emits:["username"],setup(e,{emit:t}){const a=(0,o.iH)(),s=()=>{t("username",a.value)};return(e,t)=>((0,l.wg)(),(0,l.iD)("div",null,[h,(0,l._)("div",b,[y,N,(0,l._)("div",S,[(0,l.wy)((0,l._)("input",{class:"username form-control","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),placeholder:"請輸入名稱"},null,512),[[n.nr,a.value]]),(0,l.Wm)(w.Z,{style:{"--bor":"0 4px 4px 0"},onClick:s},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(""==a.value?"請輸入名稱":"加入房間"),1)])),_:1})])])]))}};const x=k;var C=x;const U={class:"container"},H={style:{color:"green",display:"flex","justify-content":"center","font-size":"1.2rem"}},O=(0,l._)("i",{class:"material-icons"},"check",-1),J={style:{color:"red",display:"flex","justify-content":"center","font-size":"1.2rem"}},I=(0,l._)("i",{class:"material-icons"},"not_interested",-1),D={class:"tableContainer table-responsive mt-1"},A={class:"table table-bordered"},B={class:"table-light"},z=(0,l._)("th",null,"項目",-1),W=["onInput","contenteditable"],j=["onClick","onInput","contenteditable"],Y=["onInput","contenteditable"],V={class:"functions"},E=(0,l._)("span",null,[(0,l._)("i",{class:"material-icons",onclick:"document.querySelector('.sidebar').classList.add('active');"},"settings")],-1),F=["data-num"],K=(0,l._)("i",{class:"material-icons"},"people",-1),L=[K],R=(0,l._)("i",{class:"material-icons"},"check",-1),$=[R],q=(0,l._)("i",{class:"material-icons"},"not_interested",-1),P=[q];var T={__name:"RoomView",setup(e){const t=(0,s.yj)(),a=(0,r.oR)(),u=(0,o.iH)({rowName:["項目1"],colName:["名額1"],data:[["AA"]],drawAuthSwitch:!0});console.log(t.params.id);const c=(0,o.iH)(),d=t.params.id,v=a.getters.getPeerjsObj,p=(0,o.iH)("");let m;const g=(0,o.iH)([]),f=(0,o.iH)([]);var w=[],h=[];(0,l.bv)((()=>{g.value=[],w=[],m=setInterval((()=>{null!=v.id?(clearInterval(m),v.id==d&&(m=setInterval((()=>{K({type:"text",data:JSON.stringify(u.value)})}),1e3))):console.log("not")}),1e3);var e=[].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));e.map((function(e){let t;return e.onmouseenter=()=>{let a=e.getBoundingClientRect();t=document.createElement("div"),t.className="tooltip bs-tooltip-auto fade show",t.style=`position: absolute; inset: auto auto 0px 0px; margin: 0px; left:${a.left}px; top: ${a.bottom}px;`,t.innerHTML=`<div class="tooltip-arrow" style="position: absolute; left: 0px; transform: translate3d(28px, 0px, 0px);"></div><div class="tooltip-inner">${e.dataset.tooltip}</div>`,document.body.append(t)},e.onmouseleave=()=>{t.remove()},t}))}));const b=e=>{null!=v.id&&""!=e&&void 0!=e&&(p.value=e,x(JSON.stringify({id:d,username:"房主"})))},y=e=>{v.id==d?u.value.drawAuthSwitch=e:alert("您不是房主")},N=e=>{K({type:"draw",data:e})},S=e=>{if(console.log(e),e[0]<1&&(e[0]=1),e[1]<1&&(e[1]=1),u.value.rowName.length<e[0]){let t=u.value.rowName.length;for(let a=t;a<e[0];a++){u.value.rowName.push("新項目");let t=[];for(let a=0;a<e[1];a++)t.push("");u.value.data.push(JSON.parse(JSON.stringify(t)))}}else u.value.rowName=u.value.rowName.slice(0,e[0]),u.value.data=u.value.data.slice(0,e[0]);if(u.value.colName.length<e[1]){let t=u.value.colName.length;for(let a=t;a<e[1];a++){u.value.colName.push("新名額");for(let e=0;e<u.value.data.length;e++)u.value.data[e].push("")}}else{u.value.colName=u.value.colName.slice(0,e[1]);for(let t=0;t<u.value.data.length;t++)u.value.data[t]=u.value.data[t].slice(0,e[1])}console.log(u.value.data)},k=(e,t,a)=>{a.preventDefault(),-1==e&&(u.value.colName[t]=a.target.textContent.replace(/\n/gi,"")),-1==t&&(u.value.rowName[e]=a.target.textContent.replace(/\n/gi,"")),-1!=e&&-1!=t&&(u.value.data[e][t]=a.target.textContent.replace(/\n/gi,""))};function x(e){let t=JSON.parse(e),a=t["id"],l=t["username"];if(g.value.includes(a))return;console.log(a),g.value.push(a);let n={id:a,username:l};f.value.push(JSON.parse(JSON.stringify(n)));var o=v.connect(a);o.on("open",(function(){let e={type:"conn",data:JSON.stringify({id:v.id,username:p.value})};o.send(JSON.stringify(e)),w.push(o)}))}function K(e){console.log(e),e=JSON.stringify(e),w.forEach((t=>{t.send(e)}))}return(0,l.YP)(u.value,(e=>{K({type:"text",data:JSON.stringify(e)})})),v.on("connection",(function(e){e.on("data",(function(t){switch(t=JSON.parse(t),t["type"]){case"conn":x(t["data"]);break;case"text":if(v.id==d)break;u.value=JSON.parse(t["data"]);break;case"draw":if(0==u.value.drawAuthSwitch)break;var a="";for(let t=0;t<f.value.length;t++)if(f.value[t].id==e.peer){a=f.value[t].username;break}if(h.includes(e.peer))break;var l=parseInt(t["data"]);for(let t=0;t<u.value.colName.length;t++)if(""==u.value.data[l][t]){u.value.data[l][t]=a,h.push(e.peer);break}break;default:break}}))})),(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",U,[(0,l._)("div",null,[(0,l.wy)((0,l._)("span",H,[O,(0,l.Uk)(" 目前可搶籤")],512),[[n.F8,u.value.drawAuthSwitch]]),(0,l.wy)((0,l._)("span",J,[I,(0,l.Uk)(" 目前不可搶籤")],512),[[n.F8,!u.value.drawAuthSwitch]])]),(0,l._)("div",D,[(0,l._)("table",A,[(0,l._)("thead",B,[(0,l._)("tr",null,[z,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.value.colName,((e,t)=>((0,l.wg)(),(0,l.iD)("th",{key:t,role:"textbox",onInput:e=>k(-1,t,e),contenteditable:(0,o.SU)(v).id==(0,o.SU)(d)},(0,i.zw)(e),41,W)))),128))])]),(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.value.rowName,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",{class:(0,i.C_)("table-light "+((0,o.SU)(v).id!=(0,o.SU)(d)?"drawButton":"")),onClick:e=>N(t),role:"textbox",onInput:e=>k(t,-1,e),contenteditable:(0,o.SU)(v).id==(0,o.SU)(d)},(0,i.zw)(e),43,j),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.value.data[t],((e,a)=>((0,l.wg)(),(0,l.iD)("td",{key:a,onInput:e=>k(t,a,e),role:"textbox",contenteditable:(0,o.SU)(v).id==(0,o.SU)(d)},(0,i.zw)(e),41,Y)))),128))])))),128))])])])]),(0,l.Wm)(_,{ref_key:"sideBarElement",ref:c,onChangeSetting:S},null,512),(0,l._)("span",V,[(0,l._)("span",null,[E,(0,l._)("span",{class:"peopleButton","data-num":g.value.length},L,8,F),(0,l._)("span",{"data-toggle":"tooltip","data-tooltip":"允許填寫!",onClick:t[0]||(t[0]=e=>y(!0))},$),(0,l._)("span",{"data-toggle":"tooltip","data-tooltip":"關閉填寫!",onClick:t[1]||(t[1]=e=>y(!1))},P)])]),(0,l.wy)((0,l.Wm)(C,{onUsername:b},null,512),[[n.F8,(0,o.SU)(v).id!=(0,o.SU)(d)&&""==p.value]])],64))}};const Z=T;var M=Z}}]);
//# sourceMappingURL=about.7b6a60b5.js.map