(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{PCNd:function(n,t,c){"use strict";c.d(t,"a",(function(){return o}));var e=c("tyNb"),a=c("ofXK"),i=c("fXoL");let o=(()=>{class n{}return n.\u0275mod=i.Mb({type:n}),n.\u0275inj=i.Lb({factory:function(t){return new(t||n)},imports:[[a.b,e.h]]}),n})()},eRIn:function(n,t,c){"use strict";c.r(t),c.d(t,"DonateModule",(function(){return j}));var e=c("ofXK"),a=c("tyNb"),i=c("h2aP"),o=c("ZJKs"),r=c("fXoL"),s=c("lJxs"),d=c("qc5V");let b=(()=>{class n{constructor(n){this.api=n,this.path="donate",this.endpoints={donateInfo:"get_donation_info"}}getDonateInfo(){return this.api.get(this.path,this.endpoints.donateInfo).pipe(Object(s.a)(n=>(this.donateInfor=n.reply,this.donateInfor)))}}return n.\u0275fac=function(t){return new(t||n)(r.ec(d.a))},n.\u0275prov=r.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=c("TKWi"),u=c("zToK");const f={en:{title:"Overall guidance",content:"<ul><li>When making the transfer, please specify \u201cVietSeeds Scholarship - From [your name] to sponsor for [your student's name]\u201d.</li><li>For donations in the US, you can transfer us the money either via online bank account, paypal, check or online bill pay. You can also make the donation to us via Company Gift Matching Program (instruction sent separately)</li><li>For donations in Vietnam, you can transfer us the money either in USD or VND, with various bank account options as highlighted below.</li><li>Main contacts for your money transfer:<ul><li>In the US: Vu Van (Co-Founder), email: <a href='mailto:vu.van@vietseeds.org'>vu.van@vietseeds.org</a></li><li>In Vietnam: Cat Tuong Huyen (Co-Founder), email: <a href='mailto:tuong.huyen@vietseeds.org'>cattuong.huyen@vietseeds.org</a></li></ul></li><li>Once you have made the transfer, please help drop us a note to either Vu Van or Cat Tuong Huyen to let us know \u2013 so we can track the money transfer and send you a confirmation/tax receipt</li></ul>"},vi:{title:"H\u01b0\u1edbng d\u1eabn chung",content:"<ul><li>Khi chuy\u1ec3n kho\u1ea3n, anh/ch\u1ecb vui l\xf2ng ghi r\xf5 \u201cHoc bong VietSeeds - Tai tro cho em [t\xean sinh vi\xean \u0111\u01b0\u1ee3c t\xe0i tr\u1ee3] tu [t\xean anh/ch\u1ecb] .\u201d</li><li>V\u1edbi c\xe1c kho\u1ea3n \u0111\xf3ng g\xf3p t\u1eeb M\u1ef9, anh/ch\u1ecb c\xf3 th\u1ec3 chuy\u1ec3n kho\u1ea3n cho ch\xfang t\xf4i qua t\xe0i kho\u1ea3n ng\xe2n h\xe0ng tr\u1ef1c tuy\u1ebfn, Paypal, chi phi\u1ebfu ho\u1eb7c thanh to\xe1n h\xf3a \u0111\u01a1n tr\u1ef1c tuy\u1ebfn. Anh/Ch\u1ecb c\u0169ng c\xf3 th\u1ec3 chuy\u1ec3n kho\u1ea3n cho ch\xfang t\xf4i th\xf4ng qua Company Gift Matching Program (h\u01b0\u1edbng d\u1eabn chi ti\u1ebft s\u1ebd \u0111\u01b0\u1ee3c g\u1eedi ri\xeang \u0111\u1ebfn anh/ch\u1ecb).</li><li>V\u1edbi c\xe1c kho\u1ea3n \u0111\xf3ng g\xf3p \u1edf Vi\u1ec7t Nam, anh/ch\u1ecb c\xf3 th\u1ec3 chuy\u1ec3n kho\u1ea3n b\u1eb1ng \u0111\u01a1n v\u1ecb VND ho\u1eb7c USD, v\u1edbi c\xe1c l\u1ef1a ch\u1ecdn nh\u01b0 b\xean d\u01b0\u1edbi:<ul><li>\u1ede M\u1ef9: V\u0169 V\u0103n (\u0110\u1ed3ng s\xe1ng l\u1eadp), email: <a href='mailto:vu.van@vietseeds.org'>vu.van@vietseeds.org</a></li><li>\u1ede Vi\u1ec7t Nam: C\xe1t T\u01b0\u1eddng Huy\u1ec1n (\u0110\u1ed3ng s\xe1ng l\u1eadp), email: <a href='mailto:tuong.huyen@vietseeds.org'>cattuong.huyen@vietseeds.org</a></li></ul></li><li>Sau khi ho\xe0n t\u1ea5t chuy\u1ec3n kho\u1ea3n, anh/ch\u1ecb vui l\xf2ng th\xf4ng b\xe1o cho V\u0169 V\u0103n ho\u1eb7c C\xe1t T\u01b0\u1eddng Huy\u1ec1n \u0111\u1ec3 ch\xfang t\xf4i ki\u1ec3m tra t\xecnh tr\u1ea1ng chuy\u1ec3n kho\u1ea3n v\xe0 g\u1eedi bi\xean lai thu\u1ebf/x\xe1c nh\u1eadn \u0111\u1ebfn c\xe1c anh ch\u1ecb.</li></ul>"}};var h=c("0IaG");let g=(()=>{class n{constructor(n,t){this.locale=n,this.dialogRef=t,this.donateDialog=f}ngOnInit(){}onNoClick(){this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(r.Ob(r.u),r.Ob(h.c))},n.\u0275cmp=r.Ib({type:n,selectors:[["app-donate-guide"]],decls:9,vars:2,consts:[[1,"vs-dialog","get-involved"],[1,"vs-dialog_head"],[1,"vs-dialog_body","vs-dialog_body--donate"],[1,"donate-guide-content",3,"innerHTML"],[1,"vs-dialog_bottom"],["type","button",1,"btn","btn",3,"click"]],template:function(n,t){1&n&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Ub(2,"h6"),r.Jc(3),r.Tb(),r.Tb(),r.Ub(4,"div",2),r.Pb(5,"div",3),r.Tb(),r.Ub(6,"div",4),r.Ub(7,"button",5),r.ic("click",(function(){return t.onNoClick()})),r.Jc(8,"Close"),r.Tb(),r.Tb(),r.Tb()),2&n&&(r.Bb(3),r.Kc(t.donateDialog[t.locale].title),r.Bb(2),r.rc("innerHTML",t.donateDialog[t.locale].content,r.Cc))},encapsulation:2}),n})();var p,m,v,y,T,_,U,k,I,H=c("S+vS"),B=c("aC/H");function w(n,t){if(1&n&&r.Pb(0,"div",8),2&n){const n=r.mc();r.sc("innerHTML",n.card.description,r.Cc)}}function C(n,t){if(1&n&&(r.Ub(0,"tr"),r.Pb(1,"td",9),r.Tb()),2&n){const n=r.mc();r.Bb(1),r.sc("innerHTML",n.card.description,r.Cc)}}function M(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,p),r.Tb(),r.Ub(3,"td"),r.Jc(4),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.Kc(n.card.account_info.account_name)}}function V(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,m),r.Tb(),r.Ub(3,"td"),r.Jc(4),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.Kc(n.card.account_info.order)}}function K(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,v),r.Tb(),r.Ub(3,"td"),r.Jc(4),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.Kc(n.card.account_info.address)}}function L(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,y),r.Tb(),r.Ub(3,"td"),r.Jc(4),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.Kc(n.card.account_info.account_number)}}function z(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,T),r.Tb(),r.Ub(3,"td"),r.Jc(4),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.Kc(n.card.account_info.zipcode)}}function D(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,_),r.Tb(),r.Ub(3,"td"),r.Pb(4,"p",10),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.sc("innerHTML",n.card.account_info.rounting_number,r.Cc)}}function J(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,U),r.Tb(),r.Ub(3,"td"),r.Jc(4),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.Kc(n.card.account_info.branch)}}function O(n,t){if(1&n&&(r.Ub(0,"tr"),r.Ub(1,"th"),r.Yb(2,k),r.Tb(),r.Ub(3,"td"),r.Jc(4),r.Tb(),r.Tb()),2&n){const n=r.mc();r.Bb(4),r.Kc(n.card.account_info.swiftcode)}}function P(n,t){if(1&n&&(r.Ub(0,"div",11),r.Ub(1,"a",12),r.Yb(2,I),r.Tb(),r.Pb(3,"img",13),r.Tb()),2&n){const n=r.mc();r.Bb(1),r.sc("href",n.card.extra.paypal_url,r.Dc)}}p="T\xEAn t\xE0i kho\u1EA3n",m="Thanh to\xE1n cho \u0111\u01A1n c\u1EE7a",v="\u0110\u1ECBa ch\u1EC9",y="S\u1ED1 t\xE0i kho\u1EA3n",T="M\xE3 b\u01B0u \u0111i\xEA\u0323n",_="S\u1ED1 \u0111\u1ECBnh tuy\u1EBFn ",U="Chi nh\xE1nh",k="Swiftcode",I="\u0110\xF3ng g\xF3p";let N=(()=>{class n{constructor(n){this._dialog=n}ngOnInit(){}ngAfterViewInit(){if(!this.card.title){const n=document.getElementById("clickHere").getElementsByTagName("A")[0];n.setAttribute("href","javascript:void(0)"),n.addEventListener("click",()=>{this._dialog.openDialog(g,{panelClass:""})})}}}return n.\u0275fac=function(t){return new(t||n)(r.Ob(H.a))},n.\u0275cmp=r.Ib({type:n,selectors:[["vs-donate-card"]],inputs:{card:"card"},decls:16,vars:13,consts:[[1,"donate-card"],["alt","",3,"src"],[1,"donate-card_content"],["size","18","lineHeight","23","upperCase","true",3,"innerHTML"],["class","click-here","id","clickHere",3,"innerHTML",4,"ngIf"],[1,"table"],[4,"ngIf"],["class","pay-next",4,"ngIf"],["id","clickHere",1,"click-here",3,"innerHTML"],["colspan","2",1,"text-left","donate-des",3,"innerHTML"],[1,"routing-number",3,"innerHTML"],[1,"pay-next"],["target","_blank",3,"href"],["src","assets/images/pay-images.png"]],template:function(n,t){1&n&&(r.Ub(0,"div",0),r.Pb(1,"img",1),r.Ub(2,"div",2),r.Pb(3,"vs-title",3),r.Hc(4,w,1,1,"div",4),r.Ub(5,"table",5),r.Hc(6,C,2,1,"tr",6),r.Hc(7,M,5,1,"tr",6),r.Hc(8,V,5,1,"tr",6),r.Hc(9,K,5,1,"tr",6),r.Hc(10,L,5,1,"tr",6),r.Hc(11,z,5,1,"tr",6),r.Hc(12,D,5,1,"tr",6),r.Hc(13,J,5,1,"tr",6),r.Hc(14,O,5,1,"tr",6),r.Tb(),r.Hc(15,P,4,1,"div",7),r.Tb(),r.Tb()),2&n&&(r.Bb(1),r.sc("src",t.card.logo,r.Dc),r.Bb(2),r.sc("innerHTML",t.card.title,r.Cc),r.Bb(1),r.rc("ngIf",!t.card.title),r.Bb(2),r.rc("ngIf",t.card.description&&t.card.title),r.Bb(1),r.rc("ngIf",t.card.account_info.account_name),r.Bb(1),r.rc("ngIf",t.card.account_info.order),r.Bb(1),r.rc("ngIf",t.card.account_info.address),r.Bb(1),r.rc("ngIf",t.card.account_info.account_number),r.Bb(1),r.rc("ngIf",t.card.account_info.zipcode),r.Bb(1),r.rc("ngIf",t.card.account_info.rounting_number),r.Bb(1),r.rc("ngIf",t.card.account_info.branch),r.Bb(1),r.rc("ngIf",null!=t.card.account_info.swiftcode),r.Bb(1),r.rc("ngIf",t.card.extra.paypal_url))},directives:[B.a,e.k],encapsulation:2}),n})();const S=["title","H\u01B0\u1EDBng d\u1EABn t\xE0i tr\u1EE3"];function $(n,t){if(1&n&&(r.Ub(0,"div",6),r.Pb(1,"vs-donate-card",7),r.Tb()),2&n){const n=t.$implicit;r.Bb(1),r.rc("card",n)}}function Y(n,t){if(1&n&&(r.Ub(0,"div",2),r.Ub(1,"div",3),r.Ub(2,"p"),r.Jc(3),r.Tb(),r.Tb(),r.Ub(4,"div",4),r.Hc(5,$,2,1,"div",5),r.Tb(),r.Tb()),2&n){const n=r.mc();r.rc("@containAnimation",n._animation.state),r.Bb(3),r.Kc(n.donateGuide.intro),r.Bb(2),r.rc("ngForOf",n.donateGuide.ways_to_donate)}}const A=[{path:"",pathMatch:"full",component:(()=>{class n{constructor(n,t){this._donate=n,this._animation=t}ngOnInit(){this._donate.getDonateInfo().subscribe(n=>{this.donateGuide=n,this._animation.end()},n=>{alert(n)})}}return n.\u0275fac=function(t){return new(t||n)(r.Ob(b),r.Ob(l.a))},n.\u0275cmp=r.Ib({type:n,selectors:[["app-donate"]],decls:3,vars:1,consts:[["key","donate",6,"title"],["class","wrapper donate-contain parent-animation",4,"ngIf"],[1,"wrapper","donate-contain","parent-animation"],[1,"donate-contain_head"],[1,"row","donate-contain_list"],["class","col-12 col-md-6  donate-contain_list_item",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","donate-contain_list_item"],[3,"card"]],template:function(n,t){1&n&&(r.Ub(0,"sub-header",0),r.ac(1,S),r.Tb(),r.Hc(2,Y,6,3,"div",1)),2&n&&(r.Bb(2),r.rc("ngIf",t.donateGuide))},directives:[u.a,e.k,e.j,N],encapsulation:2,data:{animation:[o.a]}}),n})(),canDeactivate:[i.a]}];let F=(()=>{class n{}return n.\u0275mod=r.Mb({type:n}),n.\u0275inj=r.Lb({factory:function(t){return new(t||n)},imports:[[a.h.forChild(A)],a.h]}),n})();var x=c("PCNd"),G=c("XuFz");let j=(()=>{class n{}return n.\u0275mod=r.Mb({type:n}),n.\u0275inj=r.Lb({factory:function(t){return new(t||n)},imports:[[e.b,F,x.a,G.a]]}),n})()},zToK:function(n,t,c){"use strict";c.d(t,"a",(function(){return i}));var e=c("fXoL");const a=["*"];let i=(()=>{class n{constructor(){this.title="",this.key=""}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Ib({type:n,selectors:[["sub-header"]],inputs:{title:"title",key:"key"},ngContentSelectors:a,decls:4,vars:7,template:function(n,t){1&n&&(e.qc(),e.Ub(0,"div"),e.Ub(1,"div"),e.Jc(2),e.Tb(),e.pc(3),e.Tb()),2&n&&(e.Eb("",t.key,"_header"),e.Bb(1),e.Eb("",t.key,"_title"),e.Bb(1),e.Kc(t.title))},encapsulation:2}),n})()}}]);