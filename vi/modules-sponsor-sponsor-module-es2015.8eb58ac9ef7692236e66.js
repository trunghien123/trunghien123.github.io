(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+kqR":function(i,t,e){"use strict";e.d(t,"a",(function(){return s}));var n=e("fXoL"),r=e("ofXK");const a=["*"];let s=(()=>{class i{constructor(i){this.disabled=!1,this.upperCase=!1,this.onClick=new n.n,this.classDefault=i.nativeElement.tagName.toLowerCase()}ngOnInit(){}ngOnChanges(i){i.firstChange||(this.ngClass={btn:!0,[""+this.classDefault]:!0,[`${this.classDefault}--${this.color}`]:!!this.color,[`${this.classDefault}--${this.size}`]:!!this.size,[`${this.classDefault}--${this.weight}`]:!!this.weight,[`${this.classDefault}--radius-${this.radius}`]:!!this.radius,[""+this.customClass]:!!this.customClass,[`${this.classDefault}--width-${this.width}`]:!!this.width,"text-uppercase":this.upperCase})}click(i){this.onClick.emit(i)}}return i.\u0275fac=function(t){return new(t||i)(n.Ob(n.l))},i.\u0275cmp=n.Ib({type:i,selectors:[["vs-button"]],inputs:{size:"size",color:"color",disabled:"disabled",type:["buttonType","type"],upperCase:"upperCase",customClass:"customClass",weight:"weight",radius:"radius",width:"width"},outputs:{onClick:"onClick"},features:[n.zb],ngContentSelectors:a,decls:2,vars:3,consts:[[3,"type","disabled","ngClass","click"]],template:function(i,t){1&i&&(n.qc(),n.Ub(0,"button",0),n.ic("click",(function(i){return t.click(i)})),n.pc(1),n.Tb()),2&i&&(n.sc("type",t.type),n.rc("disabled",t.disabled)("ngClass",t.ngClass))},directives:[r.i],encapsulation:2}),i})()},IJPK:function(i,t,e){"use strict";e.r(t),e.d(t,"SponsorModule",(function(){return z}));var n=e("ofXK"),r=e("tyNb"),a=e("h2aP"),s=e("ZJKs"),o=e("fXoL"),c=e("q3Kh"),l=e("qc5V");let d=(()=>{class i{constructor(i){this.api=i,this.path="sponsor_program",this.endpoints={individualSponsor:"get_individual_sponsor",corporateSponsor:"get_corporate_sponsor"}}getIndividualSponsor(){return this.api.get(this.path,this.endpoints.individualSponsor).pipe(Object(c.map)(i=>i.reply.individual_sponsor))}getCorporateSponsor(){return this.api.get(this.path,this.endpoints.corporateSponsor).pipe(Object(c.map)(i=>i.reply.corporate_sponsor))}}return i.\u0275fac=function(t){return new(t||i)(o.ec(l.a))},i.\u0275prov=o.Kb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var u,b,p=e("jhN1"),h=e("TKWi"),v=e("aC/H"),m=e("+kqR");function f(i,t){if(1&i){const i=o.Vb();o.Ub(0,"div",1),o.Ub(1,"div",2),o.Ub(2,"div",3),o.Pb(3,"vs-title",4),o.Pb(4,"div",5),o.Tb(),o.Ub(5,"div",6),o.Ub(6,"div",7),o.Ub(7,"div",8),o.Ub(8,"div",9),o.Pb(9,"img",10),o.Tb(),o.Tb(),o.Ub(10,"div",11),o.Ub(11,"div",12),o.Pb(12,"vs-title",13),o.Pb(13,"div",14),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(14,"div",15),o.Ub(15,"p"),o.dc(16,u),o.Pb(17,"a",16),o.bc(),o.Tb(),o.Ub(18,"vs-button",17),o.ic("click",(function(){return o.Bc(i),o.mc().redirectPage()})),o.Yb(19,b),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&i){const i=o.mc();o.rc("@containAnimation",i._animation.state),o.Bb(3),o.rc("upperCase",!1)("innerHTML",i.corporate.corporate_intro.title,o.Cc),o.Bb(1),o.rc("innerHTML",i.corporate.corporate_intro.info,o.Cc),o.Bb(8),o.rc("upperCase",!1)("innerHTML",i.corporate.corporate_why.title,o.Cc),o.Bb(1),o.rc("innerHTML",i.corporate.corporate_why.info,o.Cc),o.Bb(5),o.rc("upperCase",!0)}}u="N\u1EBFu b\u1EA1n c\xF3 b\u1EA5t k\xEC c\xE2u h\u1ECFi n\xE0o, h\xE3y li\xEAn l\u1EA1c v\u1EDBi ch\xFAng t\xF4i ngay qua \u0111\u1ECBa ch\u1EC9 email:  " + "\ufffd#17\ufffd" + "vs.sponsorship@vietseeds.org" + "\ufffd/#17\ufffd" + "",b="Tr\u1EDF th\xE0nh nh\xE0 t\xE0i tr\u1EE3 c\xF9ng ch\xFAng t\xF4i";let g=(()=>{class i{constructor(i,t,e,n){this._sponsor=i,this.router=t,this.sanitize=e,this._animation=n}ngOnInit(){this.onGetCorporate()}onGetCorporate(){this._sponsor.getCorporateSponsor().subscribe(i=>{this.corporate=i,this.corporate.corporate_intro.info=this.sanitize.bypassSecurityTrustHtml(this.corporate.corporate_intro.info),this.corporate.corporate_why.info=this.sanitize.bypassSecurityTrustHtml(this.corporate.corporate_why.info);const t=this.corporate.corporate_intro.title.split("|");this.corporate.corporate_intro.title='<span class="fc-black">'+t[0]+"</span>"+t.filter((i,t)=>t>0).join(" ");const e=this.corporate.corporate_why.title.split("|");this.corporate.corporate_why.title='<span class="fc-black">'+e[0]+"</span>"+e.filter((i,t)=>t>0).join(" "),this._animation.end()},i=>{alert(i)})}redirectPage(){this.router.navigate(["contact/corporate-sponsor"])}}return i.\u0275fac=function(t){return new(t||i)(o.Ob(d),o.Ob(r.d),o.Ob(p.b),o.Ob(h.a))},i.\u0275cmp=o.Ib({type:i,selectors:[["app-corporate-sponsor"]],decls:1,vars:1,consts:[["class","individual-sponsor parent-animation",4,"ngIf"],[1,"individual-sponsor","parent-animation"],[1,"wrapper"],[1,"individual-head","corporate-head"],["size","42","lineHeight","66","customClass","justify-content-center",3,"upperCase","innerHTML"],[1,"corporate-head_content",3,"innerHTML"],[1,"individual-join"],[1,"row"],[1,"col-12","col-lg-6","d-flex","align-items-center"],[1,"individual-join_thumbnail","individual-join_thumbnail--corporate"],["src","assets/images/img-corparate-sponsors.png","alt",""],[1,"col-12","col-lg-6"],[1,"individual-join_content"],["size","32","lineHeight","36","customClass","",3,"upperCase","innerHTML"],[1,"reason-join-list","reason-join-list--corporate",3,"innerHTML"],[1,"become-sponsor","become-sponsor--corporate"],["href","mailto:vs.sponsorship@vietseeds.org","title",""],["color","green-yellow",3,"upperCase","click"]],template:function(i,t){1&i&&o.Hc(0,f,20,8,"div",0),2&i&&o.rc("ngIf",t.corporate)},directives:[n.k,v.a,m.a],encapsulation:2,data:{animation:[s.a]}}),i})(),T=(()=>{class i{constructor(i){this.el=i,this.revert=!1,this.arrLetter=[],this.init=0}ngOnInit(){for(var i=0;i<this.text.length;i++)""!=this.text[i]&&this.arrLetter.push(this.text[i]);let t;this.arrLetter=this.revert?this.arrLetter.reverse():this.arrLetter,this.arrLetter.forEach(i=>{const e=document.createElement("SPAN");this.revert?(this.init=this.init+7,","==t&&(this.init=this.init-3)):(this.init=this.init+6,","==t&&(this.init=this.init-3)),e.style.transform="rotate("+this.init+"deg)",e.innerHTML=i,this.el.nativeElement.appendChild(e),t=i})}}return i.\u0275fac=function(t){return new(t||i)(o.Ob(o.l))},i.\u0275dir=o.Jb({type:i,selectors:[["","vsCircleText",""]],inputs:{text:"text",revert:"revert"}}),i})();var C,y;function _(i,t){if(1&i&&(o.Ub(0,"div",44),o.lc(),o.Ub(1,"svg",45),o.Pb(2,"circle",46),o.Ub(3,"g",47),o.Pb(4,"path",48),o.Pb(5,"path",49),o.Tb(),o.Tb(),o.kc(),o.Ub(6,"div",50),o.Ub(7,"p",51),o.Jc(8),o.Tb(),o.Pb(9,"div",52),o.Tb(),o.Tb()),2&i){const i=t.$implicit;o.Bb(8),o.Kc(i.name),o.Bb(1),o.rc("innerHTML",i.description,o.Cc)}}function U(i,t){if(1&i){const i=o.Vb();o.Ub(0,"div",1),o.Ub(1,"div",2),o.Ub(2,"div",3),o.Pb(3,"vs-title",4),o.Pb(4,"div",5),o.Tb(),o.Ub(5,"div",6),o.Pb(6,"vs-title",7),o.Ub(7,"div",8),o.Ub(8,"div",9),o.Pb(9,"div",10),o.Ub(10,"div",11),o.Ub(11,"div",12),o.Hc(12,_,10,2,"div",13),o.Tb(),o.Tb(),o.Tb(),o.Ub(13,"div",9),o.Ub(14,"div",14),o.Pb(15,"img",15),o.Ub(16,"div",16),o.Pb(17,"img",17),o.Ub(18,"div",18),o.Ub(19,"div",19),o.Pb(20,"p",20),o.Tb(),o.Ub(21,"div",21),o.Ub(22,"p",22),o.Jc(23),o.Tb(),o.Pb(24,"div",23),o.Tb(),o.Tb(),o.Ub(25,"div",24),o.Ub(26,"div",25),o.Pb(27,"p",20),o.Tb(),o.Ub(28,"div",26),o.Ub(29,"p",22),o.Jc(30),o.Tb(),o.Pb(31,"div",27),o.Tb(),o.Tb(),o.Ub(32,"div",28),o.Ub(33,"div",29),o.Pb(34,"p",30),o.Tb(),o.Ub(35,"div",31),o.Ub(36,"p",22),o.Jc(37),o.Tb(),o.Pb(38,"div",27),o.Tb(),o.Tb(),o.Ub(39,"div",32),o.Ub(40,"div",33),o.Pb(41,"p",20),o.Tb(),o.Ub(42,"div",34),o.Ub(43,"p",22),o.Jc(44),o.Tb(),o.Pb(45,"div",27),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(46,"div",35),o.Ub(47,"div",8),o.Ub(48,"div",36),o.Ub(49,"div",37),o.Pb(50,"img",38),o.Tb(),o.Tb(),o.Ub(51,"div",9),o.Ub(52,"div",39),o.Pb(53,"vs-title",7),o.Pb(54,"div",40),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(55,"div",41),o.Ub(56,"p"),o.dc(57,C),o.Pb(58,"a",42),o.bc(),o.Tb(),o.Ub(59,"vs-button",43),o.ic("click",(function(){return o.Bc(i),o.mc().redirectPage()})),o.Yb(60,y),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&i){const i=o.mc();o.rc("@containAnimation",i._animation.state),o.Bb(3),o.rc("upperCase",!1)("innerHTML",i.individualIntro.title,o.Cc),o.Bb(1),o.rc("innerHTML",i.individualIntro.info,o.Cc),o.Bb(2),o.rc("upperCase",!1)("innerHTML",i.individualCategories.title,o.Cc),o.Bb(3),o.rc("innerHTML",i.individualCategories.info,o.Cc),o.Bb(3),o.rc("ngForOf",i.individualCategories.categories),o.Bb(3),o.tc("src","assets/images/individual-categories-with-text-",i.locale,".jpg",o.Dc),o.Bb(5),o.rc("text",i.individualCategories.categories[0].amount),o.Bb(3),o.Kc(i.individualCategories.categories[0].name),o.Bb(1),o.rc("innerHTML",i.individualCategories.categories[0].description,o.Cc),o.Bb(3),o.rc("text",i.individualCategories.categories[1].amount),o.Bb(3),o.Kc(i.individualCategories.categories[1].name),o.Bb(1),o.rc("innerHTML",i.individualCategories.categories[1].description,o.Cc),o.Bb(3),o.rc("text",i.individualCategories.categories[2].amount)("revert",!0),o.Bb(3),o.Kc(i.individualCategories.categories[2].name),o.Bb(1),o.rc("innerHTML",i.individualCategories.categories[2].description,o.Cc),o.Bb(3),o.rc("text",i.individualCategories.categories[3].amount),o.Bb(3),o.Kc(i.individualCategories.categories[3].name),o.Bb(1),o.rc("innerHTML",i.individualCategories.categories[3].description,o.Cc),o.Bb(8),o.rc("upperCase",!1)("innerHTML",i.individualWhy.title,o.Cc),o.Bb(1),o.rc("innerHTML",i.individualWhy.info,o.Cc),o.Bb(5),o.rc("upperCase",!0)}}C="N\u1EBFu b\u1EA1n c\xF3 b\u1EA5t k\xEC c\xE2u h\u1ECFi n\xE0o, h\xE3y li\xEAn l\u1EA1c v\u1EDBi ch\xFAng t\xF4i ngay qua \u0111\u1ECBa ch\u1EC9 email:  " + "\ufffd#58\ufffd" + "vs.sponsorship@vietseeds.org" + "\ufffd/#58\ufffd" + "",y="Tr\u1EDF th\xE0nh nh\xE0 t\xE0i tr\u1EE3 c\xF9ng ch\xFAng t\xF4i";let w=(()=>{class i{constructor(i,t,e,n,r){this._sponsor=i,this.router=t,this.sanitize=e,this._animation=n,this.locale=r,this.nameCatogories=["Transformer","Changer","Grower","Planter"]}ngOnInit(){this.onGetIndividual(),this.individualImage=`assets/images/individual-categories-with-text-${this.locale}.png`}onGetIndividual(){this._sponsor.getIndividualSponsor().subscribe(i=>{this.individual=i,this.individualIntro=this.individual.individual_intro,this.individualIntro.info=this.sanitize.bypassSecurityTrustHtml(this.individualIntro.info),this.individualCategories=this.individual.individual_category,this.individualWhy=this.individual.individual_why;const t=this.individualIntro.title.split("|");this.individualIntro.title='<span class="fc-black">'+t[0]+"</span>"+t.filter((i,t)=>t>0).join(" ");const e=this.individualCategories.title.split("|");this.individualCategories.title=e[0]+'<span class="fc-black">'+e.filter((i,t)=>t>0).join(" ")+"</span>";const n=this.individualWhy.title.split("|");this.individualWhy.title='<span class="fc-black">'+n[0]+"</span>"+n.filter((i,t)=>t>0).join(" "),this.individualCategories.categories=this.individualCategories.categories.map((i,t)=>(i.description=this.sanitize.bypassSecurityTrustHtml(i.description),i)),this.individualWhy.info=this.sanitize.bypassSecurityTrustHtml(this.individualWhy.info),this._animation.end()},i=>{alert(i)})}redirectPage(){this.router.navigate(["contact/individual-sponsor"])}}return i.\u0275fac=function(t){return new(t||i)(o.Ob(d),o.Ob(r.d),o.Ob(p.b),o.Ob(h.a),o.Ob(o.u))},i.\u0275cmp=o.Ib({type:i,selectors:[["app-individual-sponsor"]],decls:1,vars:1,consts:[["class","individual-sponsor parent-animation",4,"ngIf"],[1,"individual-sponsor","parent-animation"],[1,"wrapper"],[1,"individual-head"],["size","42","lineHeight","66","customClass","justify-content-center",3,"upperCase","innerHTML"],[1,"individual-head_content",3,"innerHTML"],[1,"individual-category"],["size","32","lineHeight","36","customClass","",3,"upperCase","innerHTML"],[1,"row"],[1,"col-12","col-lg-6"],[1,"short-categories",3,"innerHTML"],[1,"detail-categories"],[1,"categories"],["class","category-item",4,"ngFor","ngForOf"],[1,"img-categories-contain"],["alt","",1,"d-block","d-xl-none",3,"src"],[1,"categories-circle"],["src","assets/images/individual-categories-resize.png","alt",""],[1,"quater-item","quater-item--transformer"],[1,"quater-item_amount","quater-item_amount--transformer"],["vsCircleText","",3,"text"],[1,"quater-item_content","quater-item_content--transformer"],[1,"quater-title"],[1,"quater-des","quater-des--transformer",3,"innerHTML"],[1,"quater-item","quater-item--changer"],[1,"quater-item_amount","quater-item_amount--changer"],[1,"quater-item_content","quater-item_content--changer"],[1,"quater-des",3,"innerHTML"],[1,"quater-item","quater-item--grower"],[1,"quater-item_amount","quater-item_amount--grower"],["vsCircleText","",3,"text","revert"],[1,"quater-item_content","quater-item_content--grower"],[1,"quater-item","quater-item--planter"],[1,"quater-item_amount","quater-item_amount--planter"],[1,"quater-item_content","quater-item_content--planter"],[1,"individual-join"],[1,"col-12","col-lg-6","d-flex","align-items-center"],[1,"individual-join_thumbnail"],["src","assets/images/bg-individual-join.png","alt",""],[1,"individual-join_content"],[1,"reason-join-list",3,"innerHTML"],[1,"become-sponsor","become-sponsor--individual"],["href","mailto:vs.sponsorship@vietseeds.org","title",""],["color","green-yellow",3,"upperCase","click"],[1,"category-item"],["xmlns","http://www.w3.org/2000/svg","width","39","height","39","viewBox","0 0 39 39"],["id","Ellipse_1","data-name","Ellipse 1","cx","19.5","cy","19.5","r","19.5","fill","#85be1a"],["id","Group_1708","data-name","Group 1708","transform","translate(13.411 11.035)"],["id","Path_4980","data-name","Path 4980","d","M136.716,274.074h-3.14a.537.537,0,0,0-.523.523v3.14a.537.537,0,0,0,.523.523h3.14a.537.537,0,0,0,.523-.523V274.6a.537.537,0,0,0-.523-.523Z","transform","translate(-129.284 -261.516)","fill","#fff"],["id","Path_4981","data-name","Path 4981","d","M62.356,3.159a5.423,5.423,0,0,0-1.387-1.668A7.091,7.091,0,0,0,59.059.405,5.863,5.863,0,0,0,56.953,0a6.682,6.682,0,0,0-6.07,3.48.516.516,0,0,0-.072.366.509.509,0,0,0,.2.327L53.16,5.808a.626.626,0,0,0,.327.1.509.509,0,0,0,.406-.209,8.923,8.923,0,0,1,1.4-1.5A2.473,2.473,0,0,1,56.7,3.82a2.422,2.422,0,0,1,1.406.418,1.182,1.182,0,0,1,.608.968,1.469,1.469,0,0,1-.327.994,3.226,3.226,0,0,1-1.1.732,5.524,5.524,0,0,0-1.87,1.419,3.047,3.047,0,0,0-.85,2.047v.589a.982.982,0,0,0,.137.491.393.393,0,0,0,.334.242h3.14a.455.455,0,0,0,.366-.2.684.684,0,0,0,.157-.425,1.782,1.782,0,0,1,.36-.877,2.565,2.565,0,0,1,.9-.851q.51-.288.8-.464a6.627,6.627,0,0,0,.752-.569,3.763,3.763,0,0,0,.719-.778,4.417,4.417,0,0,0,.661-2.322A4.286,4.286,0,0,0,62.356,3.159Z","transform","translate(-50.804 0)","fill","#fff"],[1,"category-item_content"],[1,"category-item_content_name"],[1,"category-item_content_des",3,"innerHTML"]],template:function(i,t){1&i&&o.Hc(0,U,61,26,"div",0),2&i&&o.rc("ngIf",t.individual)},directives:[n.k,v.a,n.j,T,m.a],encapsulation:2,data:{animation:[s.a]}}),i})();const L=[{url:"individual-sponsor",name:{vi:"T\xe0i tr\u1ee3 c\xe1 nh\xe2n",en:"Individual Sponsors"}},{url:"corporate-sponsor",name:{vi:"T\xe0i tr\u1ee3 doanh nghi\u1ec7p",en:"Corporate Sponsors"}}];var P=e("zToK");const H=["title","Nh\xE0 t\xE0i tr\u1EE3"];var B;B="" + "\ufffd0\ufffd" + "";const I=function(i){return[i]};function M(i,t){if(1&i&&(o.Sb(0),o.Ub(1,"li",4),o.Ub(2,"a",5),o.Yb(3,B),o.Tb(),o.Tb(),o.Rb()),2&i){const i=t.$implicit,e=o.mc();o.Bb(2),o.rc("ngClass",e.isActiveRoute(i.url)?"active":"")("routerLink",o.vc(3,I,i.url)),o.Bb(1),o.cc(i.name[e.locale]),o.Zb(3)}}const O=[{path:"",component:(()=>{class i{constructor(i){this.locale=i,this.menuItems=L}ngOnInit(){}isActiveRoute(i){return window.location.pathname.indexOf(i)>-1}}return i.\u0275fac=function(t){return new(t||i)(o.Ob(o.u))},i.\u0275cmp=o.Ib({type:i,selectors:[["sponsor-layout"]],decls:6,vars:1,consts:[["key","sponsor",6,"title"],[1,"sponsor_menu"],[4,"ngFor","ngForOf"],[1,"sponsor-content"],[1,"sponsor_menu-item"],["title","",1,"sponsor_menu-link",3,"ngClass","routerLink"]],template:function(i,t){1&i&&(o.Ub(0,"sub-header",0),o.ac(1,H),o.Ub(2,"ul",1),o.Hc(3,M,4,5,"ng-container",2),o.Tb(),o.Tb(),o.Ub(4,"div",3),o.Pb(5,"router-outlet"),o.Tb()),2&i&&(o.Bb(3),o.rc("ngForOf",t.menuItems))},directives:[P.a,n.j,r.i,r.g,n.i],encapsulation:2}),i})(),children:[{path:"",pathMatch:"full",redirectTo:"individual-sponsor"},{path:"individual-sponsor",component:w,canDeactivate:[a.a]},{path:"corporate-sponsor",component:g,canDeactivate:[a.a]}]}];let q=(()=>{class i{}return i.\u0275mod=o.Mb({type:i}),i.\u0275inj=o.Lb({factory:function(t){return new(t||i)},imports:[[r.h.forChild(O)],r.h]}),i})();var k=e("PCNd"),S=e("XuFz"),j=e("dB+0");let z=(()=>{class i{}return i.\u0275mod=o.Mb({type:i}),i.\u0275inj=o.Lb({factory:function(t){return new(t||i)},imports:[[n.b,r.h,q,k.a,S.a,j.a]]}),i})()},PCNd:function(i,t,e){"use strict";e.d(t,"a",(function(){return s}));var n=e("tyNb"),r=e("ofXK"),a=e("fXoL");let s=(()=>{class i{}return i.\u0275mod=a.Mb({type:i}),i.\u0275inj=a.Lb({factory:function(t){return new(t||i)},imports:[[r.b,n.h]]}),i})()},"dB+0":function(i,t,e){"use strict";e.d(t,"a",(function(){return a}));var n=e("ofXK"),r=e("fXoL");let a=(()=>{class i{}return i.\u0275mod=r.Mb({type:i}),i.\u0275inj=r.Lb({factory:function(t){return new(t||i)},imports:[[n.b]]}),i})()},zToK:function(i,t,e){"use strict";e.d(t,"a",(function(){return a}));var n=e("fXoL");const r=["*"];let a=(()=>{class i{constructor(){this.title="",this.key=""}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=n.Ib({type:i,selectors:[["sub-header"]],inputs:{title:"title",key:"key"},ngContentSelectors:r,decls:4,vars:7,template:function(i,t){1&i&&(n.qc(),n.Ub(0,"div"),n.Ub(1,"div"),n.Jc(2),n.Tb(),n.pc(3),n.Tb()),2&i&&(n.Eb("",t.key,"_header"),n.Bb(1),n.Eb("",t.key,"_title"),n.Bb(1),n.Kc(t.title))},encapsulation:2}),i})()}}]);