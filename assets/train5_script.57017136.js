import{b as s}from"./init.236350a7.js";import{s as u,r as p,d as a}from"./sign_script.8b8c276b.js";var n=void 0;function e(){n!==void 0&&(n.close(),n=void 0)}WA.onInit(async()=>{s().then(()=>{console.log("Scripting API Extra ready")}).catch(i=>console.error(i));const o=await WA.room.website.get("sign5a"),t=await WA.room.website.get("sign5b"),r=new Map([[o,a],[t,a]]);u(r),p(r)});WA.room.onEnterZone("program1",()=>{n=WA.ui.openPopup("popUpProgram1","Auch im Arbeitsalltag sind unsere Umgebung als virtuelles B\xFCro nutzbar! So bringen wir das B\xFCrofeeling mit spontanem Austausch, Abstimmung, Hilfestellung und mehr Informationsfluss untereinander ins Homeoffice. So seid ihr standortunabh\xE4ngig in eurem B\xFCro vereint!",[{label:"OK",callback:o=>{e()}}])});WA.room.onLeaveZone("program1",()=>{e()});WA.room.onEnterZone("program2",()=>{n=WA.ui.openPopup("popUpProgram2",`Was. Ein. Event. \xDCber 1.300 Techies aus dem gesamten Konzern kamen vom 10. bis 12. Mai 2022 auf der DB TechCon zusammen, um sich intensiv \xFCber das breite IT- und Technikspektrum der Deutschen Bahn auszutauschen - und mehr.
 All das komplett virtuell auf der riesigen DB TechCon Map in WorkAdventure. In \xFCber 100 Beitr\xE4gen in Form von Vortr\xE4gen, Workshops und Diskussionsrunden wurden Best Practices und Fails ausgetauscht, Wissen geteilt, genetzwerkt, diskutiert, gewerkelt und nicht zuletzt:
gemeinsam Spa\xDF gehabt!`,[{label:"OK",callback:o=>{e()}}])});WA.room.onLeaveZone("program2",()=>{e()});WA.room.onEnterZone("program3",()=>{n=WA.ui.openPopup("popUpProgram3","Kollegen aus Nanjing, Neu-Delhi, Torronto, Warschau und Essen in den Austausch bringen? Kein Problem!",[{label:"OK",callback:o=>{e()}}])});WA.room.onLeaveZone("program3",()=>{e()});WA.room.onEnterZone("program4",()=>{n=WA.ui.openPopup("popUpProgram4","Schulungsinhalte mit Gruppenarbeiten interaktiv vermitteln? Gestalte jetzt wie die Kollegen der DB Fernverkehr deinen begehbare Lernumgebung mit uns!",[{label:"OK",callback:o=>{e()}}])});WA.room.onLeaveZone("program4",()=>{e()});
