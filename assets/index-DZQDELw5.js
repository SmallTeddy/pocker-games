import{d as e,c as t,a,b as s,w as l,u as r,B as n,o as c,e as i,n as d,t as o,f as u,F as m,g as b,h as p,i as g,j as f,r as x,k as v,l as y,A as k}from"./vendor-vue-DhxQJbRQ.js";import{u as h,a as _}from"./game-logic-3Kh3-lzu.js";import"./vendors-Dh55IELM.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w={class:"game-container flex flex-col items-center justify-center gap-8"},C={class:"flex flex-col gap-4 w-48"},j=e({__name:"Menu",emits:["selectGame"],setup(e,{emit:d}){const o=d;return(e,d)=>(c(),t("div",w,[d[4]||(d[4]=a("h2",{class:"text-2xl font-bold text-gray-800"},"选择游戏",-1)),a("div",C,[s(r(n),{class:"apple-button bg-blue-500 text-white border-0 h-12 text-lg",onClick:d[0]||(d[0]=e=>o("selectGame","blackjack"))},{default:l((()=>d[2]||(d[2]=[i(" 21点 ")]))),_:1}),s(r(n),{class:"apple-button bg-green-500 text-white border-0 h-12 text-lg",onClick:d[1]||(d[1]=e=>o("selectGame","poker"))},{default:l((()=>d[3]||(d[3]=[i(" 德州扑克 ")]))),_:1})])]))}}),S={class:"card-wrapper"},G={class:"card-corner top-left"},B={class:"rank"},M={class:"suit"},T={class:"card-center"},N={class:"icon"},L={class:"card-corner bottom-right"},O={class:"rank"},A={class:"suit"},H={key:1,class:"card card-back"},P=((e,t)=>{const a=e.__vccOpts||e;for(const[s,l]of t)a[s]=l;return a})(e({__name:"Card",props:{card:null,hidden:{type:Boolean}},setup:e=>(s,l)=>{return c(),t("div",S,[!e.hidden&&e.card?(c(),t("div",{key:0,class:d(["card",(r=e.card.suit,"♥"===r||"♦"===r?"text-red-600":"text-gray-800")])},[a("div",G,[a("div",B,o(e.card.rank),1),a("div",M,o(e.card.suit),1)]),a("div",T,[a("div",N,o(e.card.suit),1)]),a("div",L,[a("div",O,o(e.card.rank),1),a("div",A,o(e.card.suit),1)])],2)):(c(),t("div",H,l[0]||(l[0]=[a("div",{class:"pattern"},null,-1)])))]);var r}}),[["__scopeId","data-v-a27e8782"]]),F={class:"game-container flex flex-col justify-between"},I={class:"flex justify-end mb-6"},W={class:"flex-1"},q={class:"mb-12"},E={class:"flex items-center mb-4"},K={class:"flex gap-4 ml-8"},z={class:"mb-12"},D={class:"flex items-center mb-4"},J={class:"flex gap-4 ml-8"},Q={key:0,class:"text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"},R={class:"text-xl font-medium text-gray-800"},U={class:"flex gap-4 justify-center pt-6 border-t border-gray-200"},V=e({__name:"GameTable",emits:["backToMenu"],setup(e,{emit:n}){const{gameState:d,startNewGame:x,hit:v,stand:y}=h(),k=n;return u((()=>{x()})),(e,n)=>{const u=g("Button"),h=P;return c(),t("div",F,[a("div",I,[s(u,{class:"apple-button bg-gray-500 text-white border-0",onClick:n[0]||(n[0]=e=>k("backToMenu"))},{default:l((()=>n[1]||(n[1]=[i(" 返回菜单 ")]))),_:1})]),a("div",W,[a("div",q,[a("div",E,[n[2]||(n[2]=a("h2",{class:"text-xl text-gray-800 font-medium"},"庄家的牌",-1)),a("div",K,[(c(!0),t(m,null,b(r(d).dealerHand,((e,t)=>(c(),f(h,{key:t,card:e,hidden:1===t&&"playing"===r(d).gameStatus},null,8,["card","hidden"])))),128))])])]),a("div",z,[a("div",D,[n[3]||(n[3]=a("h2",{class:"text-xl text-gray-800 font-medium"},"玩家的牌",-1)),a("div",J,[(c(!0),t(m,null,b(r(d).playerHand,((e,t)=>(c(),f(h,{key:t,card:e},null,8,["card"])))),128))])])]),"playing"!==r(d).gameStatus?(c(),t("div",Q,[a("span",R," 游戏结果: "+o({playerBust:"玩家爆牌",dealerBust:"庄家爆牌",playerWin:"玩家胜",dealerWin:"庄家胜",push:"平局"}[r(d).gameStatus]),1)])):p("",!0)]),a("div",U,[s(u,{class:"apple-button bg-blue-500 text-white border-0",onClick:r(v),disabled:"playing"!==r(d).gameStatus},{default:l((()=>n[4]||(n[4]=[i(" 要牌 ")]))),_:1},8,["onClick","disabled"]),s(u,{class:"apple-button bg-gray-500 text-white border-0",onClick:r(y),disabled:"playing"!==r(d).gameStatus},{default:l((()=>n[5]||(n[5]=[i(" 停牌 ")]))),_:1},8,["onClick","disabled"]),s(u,{class:"apple-button bg-green-600 text-white border-0",onClick:r(x),disabled:"playing"===r(d).gameStatus},{default:l((()=>n[6]||(n[6]=[i(" 新游戏 ")]))),_:1},8,["onClick","disabled"])])])}}}),X={class:"game-container flex flex-col"},Y={class:"flex justify-between mb-6"},Z={class:"text-lg font-medium"},$={class:"flex-1"},ee={class:"mb-8"},te={class:"flex gap-4 justify-center"},ae={class:"mb-8"},se={class:"flex gap-4 justify-center"},le={class:"flex gap-4 justify-center pt-6 border-t border-gray-200"},re=e({__name:"GameTable",emits:["backToMenu"],setup(e,{emit:n}){const{gameState:d,startNewGame:p,dealCommunityCards:x,fold:v}=_(),y=n;return u((()=>{p()})),(e,n)=>{const u=g("Button"),k=P;return c(),t("div",X,[a("div",Y,[a("span",Z,"筹码: "+o(r(d).chips),1),s(u,{class:"apple-button bg-gray-500 text-white border-0",onClick:n[0]||(n[0]=e=>y("backToMenu"))},{default:l((()=>n[1]||(n[1]=[i(" 返回菜单 ")]))),_:1})]),a("div",$,[a("div",ee,[n[2]||(n[2]=a("h2",{class:"text-xl text-gray-800 font-medium mb-4"},"公共牌",-1)),a("div",te,[(c(!0),t(m,null,b(r(d).communityCards,((e,t)=>(c(),f(k,{key:t,card:e},null,8,["card"])))),128))])]),a("div",ae,[n[3]||(n[3]=a("h2",{class:"text-xl text-gray-800 font-medium mb-4"},"你的手牌",-1)),a("div",se,[(c(!0),t(m,null,b(r(d).playerHand,((e,t)=>(c(),f(k,{key:t,card:e},null,8,["card"])))),128))])])]),a("div",le,[s(u,{class:"apple-button bg-blue-500 text-white border-0",onClick:r(x),disabled:"betting"===r(d).gameStatus||"river"===r(d).gameStatus},{default:l((()=>[i(o("preFlop"===r(d).gameStatus?"发公共牌":"发下一张"),1)])),_:1},8,["onClick","disabled"]),s(u,{class:"apple-button bg-red-500 text-white border-0",onClick:r(v)},{default:l((()=>n[4]||(n[4]=[i(" 弃牌 ")]))),_:1},8,["onClick"]),s(u,{class:"apple-button bg-green-600 text-white border-0",onClick:r(p)},{default:l((()=>n[5]||(n[5]=[i(" 新游戏 ")]))),_:1},8,["onClick"])])])}}}),ne={class:"min-h-screen bg-[#306339] p-4"},ce={class:"text-3xl font-bold mb-8 text-center text-white tracking-wide"},ie=y(e({__name:"App",setup(e){const s=x("menu"),l=e=>{s.value=e},r=()=>{s.value="menu"};return(e,n)=>(c(),t("div",ne,[a("h1",ce,o("menu"===s.value?"扑克游戏":"blackjack"===s.value?"21点":"德州扑克"),1),(c(),f(v("menu"===s.value?j:"blackjack"===s.value?V:re),{onSelectGame:l,onBackToMenu:r},null,32))]))}}));ie.use(k),ie.mount("#app");