import"./mustache.c5531e42.js";import{b as n}from"./init.8fc33a94.js";import{s as i,r as p,t as r}from"./sign_script.8b8c276b.js";import{p as a,o as g,c as m,u as c,a as b,b as W}from"./vars.c54db3b0.js";WA.onInit(async()=>{n().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e));const s=await WA.room.website.get("sign1a"),t=await WA.room.website.get("sign1b"),o=new Map([[s,r],[t,r]]);i(o),p(o),WA.room.onEnterZone(a,()=>{g(W,b,c)}),WA.room.onLeaveZone(a,()=>{m()})});