import{b as a}from"./init.236350a7.js";console.log("Script started successfully");var o=void 0,t=!1,n="https://web.microsoftstream.com/embed/video/06f916c4-78cf-4b19-9295-01f639b016db?autoplay=true",r="tutorial";function s(){o!==void 0&&(o.close(),o=void 0)}WA.room.onEnterZone(r,()=>{o=WA.ui.openPopup("popUpTutorial","Tutorial ansehen?",[{label:"OK",callback:e=>{WA.nav.openCoWebSite(n,!1,"autoplay;camera;microphone;fullscreen;encrypted-media"),t=!0,s()}}])});WA.room.onLeaveZone(r,()=>{s(),t&&(WA.nav.closeCoWebSite(),t=!1)});WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("votePos").subscribe(()=>{console.log("VotePos: ",WA.state.votePos),WA.state.votePos++}),WA.room.onLeaveLayer("votePos").subscribe(()=>{console.log("VotePos: ",WA.state.votePos),WA.state.votePos!==0&&WA.state.votePos--}),WA.room.onEnterLayer("voteNeg").subscribe(()=>{console.log("voteNeg: ",WA.state.voteNeg),WA.state.voteNeg++}),WA.room.onLeaveLayer("voteNeg").subscribe(()=>{console.log("voteNeg: ",WA.state.voteNeg),WA.state.voteNeg!==0&&WA.state.voteNeg--}),WA.room.onEnterLayer("voteNeut").subscribe(()=>{console.log("voteNeut: ",WA.state.voteNeut),WA.state.voteNeut++}),WA.room.onLeaveLayer("voteNeut").subscribe(()=>{console.log("voteNeut: ",WA.state.voteNeut),WA.state.voteNeut!==0&&WA.state.voteNeut--}),a().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e));
