import"./mustache.c5531e42.js";import{b as i}from"./init.8fc33a94.js";console.log("Script started successfully");var n=void 0,o=!1,p="https://web.microsoftstream.com/embed/video/ca24bcea-3cab-4878-8b34-65e6bf87939f?autoplay=true",s="tutorial";function e(){n!==void 0&&(n.close(),n=void 0)}const u=[{label:"Reset",className:"error",callback:()=>WA.state.votePos=WA.state.voteNeg=WA.state.voteNeut=0}];WA.room.onEnterLayer("start_zone").subscribe(()=>{n=WA.ui.openPopup("popUpStart",`Willkommen bei unserer Live-Demo von DB WorkAdventure zum Digital Workplace Anwendertag!

Erkunde unsere Umgebung mit deinem Avatar, um die verschiedenen Funktionen und M\xF6glichkeiten kennenzulernen.
Im Programm des Anwendertages kannst du unseren Vortrag zu digital Eventplattformen bzw. unseren Markstand zur ortsunabh\xE4ngigen Zusammenarbeit in virtuellen B\xFCros besuchen, um mehr zu erfahren!`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("start_zone").subscribe(()=>{e()});WA.room.onEnterLayer("koch_program").subscribe(()=>{n=WA.ui.openPopup("popUpKoch","Auch Videos von Plattformen wie MS Streams k\xF6nnen als Fenster eingebettet werden!",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("koch_program").subscribe(()=>{e()});WA.room.onEnterLayer("startImage_program").subscribe(()=>{n=WA.ui.openPopup("popUpImage",`Als Webanwendung l\xE4uft WorkAdventure ohne Installation im Browser, auch auf mobilen Ger\xE4ten! In wenigen Sekunden sind Nutzer so startklar. Unsere Umgebungen k\xF6nnen so konfiguriert werden, dass sie DB intern (Single Sign On Authentifizierung) oder \xF6ffentlich erreichbar sind. Auch k\xF6nnen einzelne externe Personen Zugang erhalten.

In der \xDCbersicht unserer Umgebung siehst du welche dort eingebauten Funktionen du entdecken kannst!`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("startImage_program").subscribe(()=>{e()});WA.room.onEnterLayer("main_program").subscribe(()=>{n=WA.ui.openPopup("popUpMain","Auch LiveStreams von DB WebCast sind integrierbar und k\xF6nnen in die Umgebung eingebunden werden!",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("main_program").subscribe(()=>{e()});WA.room.onEnterLayer("gif_program").subscribe(()=>{n=WA.ui.openPopup("popUpGif",`Informationsausspielung an Infobildschirmen?
Auch virtuell kein Problem!`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("gif_program").subscribe(()=>{e()});WA.room.onEnterLayer("grie_program").subscribe(()=>{n=WA.ui.openPopup("popUpGrie","Alternativ k\xF6nnen Videos auch direkt in die Umgebung integriert werden!",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("grie_program").subscribe(()=>{e()});WA.room.onEnterLayer("program7").subscribe(()=>{n=WA.ui.openPopup("popUpProgram7",`Webinhalte die nicht direkt in WorkAdventure darstellbar sind,
 k\xF6nnen stattdessen verlinkt werden!

 An unserem Fahrkartenautomat findest du z.B. die Bestellung von Mitarbeiterfahrkarten!`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("program7").subscribe(()=>{e()});WA.room.onEnterLayer("ticket_program").subscribe(()=>{n=WA.ui.openPopup("popUpTicket","Mitarbeiterfahrkarten bestellen?",[{label:"Bestellen",callback:r=>{WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#"),e()}}])});WA.room.onLeaveLayer("ticket_program").subscribe(()=>{e()});WA.room.onEnterLayer("ticket2_program").subscribe(()=>{n=WA.ui.openPopup("popUpTicket2","Mitarbeiterfahrkarten bestellen?",[{label:"Bestellen",callback:r=>{WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#"),e()}}])});WA.room.onLeaveLayer("ticket2_program").subscribe(()=>{e()});WA.room.onEnterLayer("program6",()=>{n=WA.ui.openPopup("popUpProgram6","Eingebundene Webinhalte k\xF6nnen Workshopformate unterst\xFCtzen oder unterhalten und zum Vernetzen anregen!",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("program6").subscribe(()=>{e()});WA.room.onEnterLayer("crossing_program").subscribe(()=>{n=WA.ui.openPopup("popUpCrossing",`Karten\xFCberg\xE4nge erm\xF6glichen einen nahtlosen \xDCbergang zwischen zwei Umgebungen.

So kombinierst du verschiedene Bereiche passend f\xFCr dein Event!`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("crossing_program").subscribe(()=>{e()});WA.room.onEnterLayer("portal_program").subscribe(()=>{n=WA.ui.openPopup("popUpPortal",`Auch im Arbeitsalltag sind unsere Umgebung als virtuelles B\xFCro nutzbar!

So bringen wir Teamgef\xFChl, Austausch und spontane Gespr\xE4che zur Abstimmung geht aber verloren.
 Wir \xE4ndern das und bringen das B\xFCrofeeling ins Homeoffice`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("portal_program").subscribe(()=>{e()});WA.room.onEnterLayer("jaz_program").subscribe(()=>{n=WA.ui.openPopup("popUpJaz","F\xFCr  einen noch st\xE4rkeren Konferenz- und Eventservice l\xE4sst sich DB WorkAdventure problemlos in JAZ integrieren!",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("jaz_program").subscribe(()=>{e()});WA.room.onEnterLayer("choices_program").subscribe(()=>{n=WA.ui.openPopup("popUpChoices",`Abstimmungen der anderen Art!

Mit unseren interaktiven Elementen gibst du durch die Positionierung deines Avatars deine Stimme ab`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("choices_program").subscribe(()=>{e()});WA.room.onEnterLayer("sign_program").subscribe(()=>{n=WA.ui.openPopup("popUpSigns","Texte und Beschriftungen k\xF6nnen durch Moderatoren jederzeit angepasst werden",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("sign_program").subscribe(()=>{e()});WA.room.onEnterLayer("schalter_program").subscribe(()=>{n=WA.ui.openPopup("popUpSchalter","Netzwerk-Bereiche bringst du Leute durch Aktivit\xE4ten wie Speed-Networking zusammen",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("schalter_program").subscribe(()=>{e()});WA.room.onEnterLayer("schalter1_program").subscribe(()=>{n=WA.ui.openPopup("popUpSchalter1","Was ist deine Lieblingserinnerung an eine Bahnreise?",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("schalter1_program").subscribe(()=>{e()});WA.room.onEnterLayer("schalter2_program").subscribe(()=>{n=WA.ui.openPopup("popUpSchalter2",`Seit wann arbeitest du bei der Bahn?
 In welchen Bereichen warst du aktiv?`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("schalter2_program").subscribe(()=>{e()});WA.room.onEnterLayer("schalter3_program").subscribe(()=>{n=WA.ui.openPopup("popUpSchalter3","Was ist dein Lieblingsbuch?",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("schalter3_program").subscribe(()=>{e()});WA.room.onEnterLayer("schalter4_program").subscribe(()=>{n=WA.ui.openPopup("popUpSchalter4","Welchen Star hast du schonmal getroffen oder m\xF6chtest einmal treffen?",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("schalter4_program").subscribe(()=>{e()});WA.room.onEnterLayer("schalter5_program").subscribe(()=>{n=WA.ui.openPopup("popUpSchalter5","F\xFCr was ist deine Abteilung zust\xE4ndig?",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("schalter5_program").subscribe(()=>{e()});WA.room.onEnterLayer("workshop_program").subscribe(()=>{n=WA.ui.openPopup("popUpWorkshop",`In Besprechungszonen wird man automatisch mit allen Personen zusammengeschaltet,
 die sich mit ihrem Avatar dort befinden.

 Parallele Workshopsessions, Randgespr\xE4che, Nachfragen an die Referenten, Frei Bewegung f\xFCr Teilnehmer \u2013 alles kein Problem!`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("workshop_program").subscribe(()=>{e()});WA.room.onEnterLayer("worldtour_program").subscribe(()=>{n=WA.ui.openPopup("popUpWorldtour","Umgebungen sind vollst\xE4ndig individualisierbar, alternativ kannst du die zu deinem Event passende Standardkarten w\xE4hlen und mit uns anpassen!",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("worldtour_program").subscribe(()=>{e()});WA.room.onEnterLayer("whiteboard_program").subscribe(()=>{n=WA.ui.openPopup("popUpWhiteboard","Auch das Conceptboard-Whiteboard ist in die Umgebung integrierbar.",[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer("whiteboard_program").subscribe(()=>{e()});WA.room.onEnterLayer(s).subscribe(()=>{WA.nav.openCoWebSite(p,!1,"autoplay;camera;microphone;fullscreen;encrypted-media"),o=!0,n=WA.ui.openPopup("popUpTutorial",`Einige Webanwendungen die eine Einbindung erlauben, k\xF6nnen direkt in WorkAdventure ge\xF6ffnet werden.

 So wie unser Tutorialvideo`,[{label:"OK",callback:r=>{e()}}])});WA.room.onLeaveLayer(s).subscribe(()=>{e(),o&&(WA.nav.closeCoWebSite(),o=!1)});WA.room.onEnterLayer("program2").subscribe(()=>{n=WA.ui.openPopup("popUpProgram2",`Noch Fragen?
Sprich uns w\xE4hrend des Anwendertag im Informationsbereich an oder schreib uns eine kurze Mail mit deinen Fragen!`,[{label:"OK",callback:r=>{e()}},{label:"E-Mail Team EVS",callback:r=>{WA.nav.openTab("mailto:SendIn.Enterprise.VoIP.Services@deutschebahn.com")}}])});WA.room.onLeaveLayer("program2").subscribe(()=>{e()});WA.onInit().then(async()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags);var r=await WA.player.getPosition();r.x<2100&&(n=WA.ui.openPopup("popUpStart",`Willkommen bei unserer Live-Demo von DB WorkAdventure zum Digital Workplace Anwendertag!

Erkunde unsere Umgebung mit deinem Avatar, um die verschiedenen Funktionen und M\xF6glichkeiten kennenzulernen.
Im Programm des Anwendertages kannst du unseren Vortrag zu digital Eventplattformen bzw. unseren Markstand zur ortsunabh\xE4ngigen Zusammenarbeit in virtuellen B\xFCros besuchen, um mehr zu erfahren!`,[{label:"OK",callback:t=>{e()}}])),WA.room.onEnterLayer("votePos").subscribe(()=>{console.log("VotePos: ",WA.state.votePos),WA.state.votePos++}),WA.room.onLeaveLayer("votePos").subscribe(()=>{console.log("VotePos: ",WA.state.votePos),WA.state.votePos!==0&&WA.state.votePos--}),WA.room.onEnterLayer("voteNeg").subscribe(()=>{console.log("voteNeg: ",WA.state.voteNeg),WA.state.voteNeg++}),WA.room.onLeaveLayer("voteNeg").subscribe(()=>{console.log("voteNeg: ",WA.state.voteNeg),WA.state.voteNeg!==0&&WA.state.voteNeg--}),WA.room.onEnterLayer("voteNeut").subscribe(()=>{console.log("voteNeut: ",WA.state.voteNeut),WA.state.voteNeut++}),WA.room.onLeaveLayer("voteNeut").subscribe(()=>{console.log("voteNeut: ",WA.state.voteNeut),WA.state.voteNeut!==0&&WA.state.voteNeut--});let a;WA.room.onEnterLayer("voteRes").subscribe(()=>{a=WA.ui.openPopup("resetPopup","Soll das Voting zur\xFCckgesetzt werden?",u)}),WA.room.onLeaveLayer("voteRes").subscribe(()=>{a.close()}),i().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(r=>console.error(r));