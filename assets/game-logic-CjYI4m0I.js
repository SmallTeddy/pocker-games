import{r as e}from"./vendor-vue-DhxQJbRQ.js";function n(){const e=["♠","♥","♦","♣"],n=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],r=[];for(const a of e)for(const e of n)r.push({suit:a,rank:e});return a(r)}function a(e){const n=[...e];for(let a=n.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[n[a],n[e]]=[n[e],n[a]]}return n}function r(e){let n=0,a=0;for(const r of e)"A"===r.rank?a+=1:["K","Q","J"].includes(r.rank)?n+=10:n+=parseInt(r.rank);for(let r=0;r<a;r++)n+=n+11<=21?11:1;return n}function t(){const a=e({deck:[],playerHand:[],dealerHand:[],gameStatus:"betting"}),t=e=>{const n=a.value.deck.pop();n&&("player"===e?a.value.playerHand.push(n):a.value.dealerHand.push(n))};return{gameState:a,startNewGame:()=>{a.value={deck:n(),playerHand:[],dealerHand:[],gameStatus:"playing"},t("player"),t("dealer"),t("player"),t("dealer")},hit:()=>{t("player");r(a.value.playerHand)>21&&(a.value.gameStatus="playerBust")},stand:()=>{for(;r(a.value.dealerHand)<17;)t("dealer");const e=r(a.value.playerHand),n=r(a.value.dealerHand);a.value.gameStatus=n>21?"dealerBust":n>e?"dealerWin":e>n?"playerWin":"push"}}}const u=10,l=9,o=8,s=7,c=6,d=5,i=4,p=3,f=2,m=1,v="皇家同花顺",k="同花顺",h="四条",y="葫芦",g="同花",w="顺子",S="三条",H="两对",z="一对",A="高牌";function C(e){const n=function(e,n){const a=[],r=e.length;function t(u,l){if(l.length!==n)for(let n=u;n<r;n++)l.push(e[n]),t(n+1,l),l.pop();else a.push([...l])}return t(0,[]),a}(e,5);let a={rank:0,name:"",cards:[]};for(const r of n){const e=G(r);e.rank>a.rank&&(a=e)}return a}function G(e){return function(e){return J(e)&&e.some((e=>"A"===e.rank))}(e)?{rank:u,name:v,cards:e}:J(e)?{rank:l,name:k,cards:e}:function(e){const n=e.map((e=>e.rank));return 2===new Set(n).size&&n.some((e=>4===n.filter((n=>n===e)).length))}(e)?{rank:o,name:h,cards:e}:function(e){const n=e.map((e=>e.rank));return 2===new Set(n).size&&n.some((e=>3===n.filter((n=>n===e)).length))}(e)?{rank:s,name:y,cards:e}:K(e)?{rank:c,name:g,cards:e}:P(e)?{rank:d,name:w,cards:e}:function(e){const n=e.map((e=>e.rank));return 3===new Set(n).size&&n.some((e=>3===n.filter((n=>n===e)).length))}(e)?{rank:i,name:S,cards:e}:function(e){const n=e.map((e=>e.rank));return 2===[...new Set(n)].filter((e=>2===n.filter((n=>n===e)).length)).length}(e)?{rank:p,name:H,cards:e}:function(e){const n=e.map((e=>e.rank));return 4===new Set(n).size}(e)?{rank:f,name:z,cards:e}:{rank:m,name:A,cards:e}}function J(e){return K(e)&&P(e)}function K(e){return 1===new Set(e.map((e=>e.suit))).size}function P(e){const n=e.map((e=>function(e){const n={A:14,K:13,Q:12,J:11,10:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2};return n[e]}(e.rank))).sort(((e,n)=>e-n));return n.every(((e,a)=>0===a||e===n[a-1]+1))}function Q(){const r=e([]),t=e([]),u=e({}),l=e([{id:"player",name:"玩家",cards:[],folded:!1,isComputer:!1},{id:"computer",name:"电脑",cards:[],folded:!1,isComputer:!0}]),o=e({round:"preflop",currentPlayer:"player"}),s=()=>{r.value=a(n()),l.value.forEach((e=>{e.cards=[r.value.pop(),r.value.pop()],e.folded=!1})),t.value=[r.value.pop(),r.value.pop(),r.value.pop()],o.value={round:"flop",currentPlayer:"player"}},c=()=>{if(l.value.find((e=>e.folded))){const e=l.value.find((e=>!e.folded));return void d("弃牌","player"===e.id)}const e=C([...l.value[0].cards,...t.value]),n=C([...l.value[1].cards,...t.value]);u.value={player:e,computer:n};let a="";a=e.rank>n.rank?`玩家获胜 - ${e.name}`:n.rank>e.rank?`电脑获胜 - ${n.name}`:"平局",o.value.round="showdown",d(a)},d=(e,n=!0)=>{o.value={...o.value,round:"showdown",result:e},n&&setTimeout((()=>{s()}),1e4)};return{players:l,communityCards:t,gameState:o,currentHands:u,initGame:s,continueGame:()=>{if(5===t.value.length)c();else{const e=r.value.pop();t.value=[...t.value,e],o.value.round=4===t.value.length?"turn":"river"}},fold:()=>{l.value.find((e=>e.id===o.value.currentPlayer)).folded=!0,c()},showResult:d}}export{Q as a,t as u};