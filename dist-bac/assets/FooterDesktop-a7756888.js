import{d as c,o as s,c as t,F as r,e as n,a as o,j as l}from"./index-e8217cd6.js";const d={class:"flex justify-center my-2"},u={key:0,class:"mx-3"},i=["href"],m=["src","alt"],g=c({__name:"FooterDesktop",props:{lang:null,social:null},setup(a){return(_,h)=>(s(),t("div",d,[(s(!0),t(r,null,n(a.social,e=>(s(),t("div",{key:e.url},[e.tags.includes("desktop")&&(e.tags.includes("all")||e.tags.includes(a.lang))?(s(),t("div",u,[o("a",{href:e.url},[o("img",{src:`/social/${e.icon}`,alt:e.name,width:"25",height:"25"},null,8,m)],8,i)])):l("",!0)]))),128))]))}});export{g as default};
