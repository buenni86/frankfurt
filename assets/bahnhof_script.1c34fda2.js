import"./mustache.c5531e42.js";import{b as i}from"./init.ed0bf5f4.js";import{s as m,r as c,o as w,u as W,p as P,c as b,t as M,a as A,b as k,d as U,e as f,f as h}from"./vars.11da54fa.js";WA.onInit(async()=>{i().then(()=>{console.log("Scripting API Extra ready")}).catch(o=>console.error(o));const s=await WA.room.website.get("sign1"),t=await WA.room.website.get("sign2"),p=await WA.room.website.get("sign3"),e=await WA.room.website.get("sign4"),n=await WA.room.website.get("sign5"),g=await WA.room.website.get("sign6"),r=new Map([[s,M],[t,A],[p,k],[e,U],[n,f],[g,h]]);m(r),c(r);const a=new Map([["program1","popUpProgram1"],["program2","popUpProgram2"],["program3","popUpProgram3"],["program4","popUpProgram4"],["program5","popUpProgram5"],["program6","popUpProgram6"],["program7","popUpProgram7"]]);for(const o of a.keys())WA.room.onEnterZone(o,()=>{w(a.get(o),P,W)}),WA.room.onLeaveZone(o,()=>{b()})});