(self.webpackChunkproject_demo=self.webpackChunkproject_demo||[]).push([[696],{696:(e,t,a)=>{"use strict";a.r(t),a.d(t,{WeatherModule:()=>y});var i=a(116),n=a(619),s=a(996),r=a(693),p=a(529);function c(e,t,a,i=null){return i&&Object.keys(i).length>0?`${e}/${t}/${a}?${function(e={}){return e&&Object.keys(e).length>0?`${Object.keys(e).filter(t=>t&&"null"!=e[t]).map(t=>[t,encodeURIComponent(e[t])].join("=")).join("&")}`:""}(i)}`:`${e}/${t}/${a}`}let o=(()=>{class e{constructor(e,t){this.http=e,this.locale=t,this.apiServer=p.N.apiServe}get(e,t,a={}){return this.http.get(c(this.apiServer,e,t,a)).pipe((0,s.U)(e=>e))}post(e,t,a={},i=null){let n;return n=i&&"multipart/form-data"==i.type?{headers:new r.WM({})}:{headers:new r.WM({"Content-Type":i&&i.type?i.type:"application/json"})},this.http.post(c(this.apiServer,e,t),a,n).pipe((0,s.U)(e=>e))}put(e,t,a,i){const n={headers:new r.WM({"Content-Type":i&&i.type?i.type:"application/json"})};return this.http.put(c(this.apiServer,e,t),a,n).pipe((0,s.U)(e=>e))}file(e,t,a){return this.http.post(c(this.apiServer,e,t),a,{responseType:"blob"})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(r.eN),n.LFG(n.soG))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),g=(()=>{class e{constructor(e){this.api=e,this.path="data/2.5",this.endpoints={id:"weather"}}getTemp(e){return this.api.get(this.path,this.endpoints.id,e).pipe((0,s.U)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(o))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,t){1&e&&n._UZ(0,"img",29)}function Z(e,t){1&e&&n._UZ(0,"img",30)}function h(e,t){1&e&&n._UZ(0,"img",31)}function u(e,t){1&e&&n._UZ(0,"img",32)}function d(e,t){1&e&&n._UZ(0,"img",29)}function l(e,t){1&e&&n._UZ(0,"img",30)}function f(e,t){1&e&&n._UZ(0,"img",31)}function T(e,t){1&e&&n._UZ(0,"img",32)}function w(e,t){1&e&&n._UZ(0,"img",29)}function _(e,t){1&e&&n._UZ(0,"img",30)}function A(e,t){1&e&&n._UZ(0,"img",31)}function q(e,t){1&e&&n._UZ(0,"img",32)}let x=(()=>{class e{constructor(e){this.weather=e,this.name1="",this.name2="",this.name3="",this.weatherMain1="",this.weatherMain2="",this.weatherMain3="",this.data1={q:"saigon",appid:"37665091eb00d3291b052e9daf04f7be"},this.data2={q:"magadan",appid:"37665091eb00d3291b052e9daf04f7be"},this.data3={q:"hanoi",appid:"37665091eb00d3291b052e9daf04f7be"}}ngOnInit(){this.getTemp1(this.data1),this.getTemp2(this.data2),this.getTemp3(this.data3)}getTemp1(e){this.weather.getTemp(this.data1).subscribe(e=>{this.name1=e.name,this.temp1=Math.round(e.main.temp-273.15),this.minTemp1=Math.round(e.main.temp_min-273.15),this.maxTemp1=Math.round(e.main.temp_max-273.15),this.weatherMain1=e.weather[0].main},e=>{alert(e)})}getTemp2(e){this.weather.getTemp(this.data2).subscribe(e=>{this.name2=e.name,this.temp2=Math.round(e.main.temp-273.15),this.minTemp2=Math.round(e.main.temp_min-273.15),this.maxTemp2=Math.round(e.main.temp_max-273.15),this.weatherMain2=e.weather[0].main},e=>{alert(e)})}getTemp3(e){this.weather.getTemp(this.data3).subscribe(e=>{this.name3=e.name,this.temp3=Math.round(e.main.temp-273.15),this.minTemp3=Math.round(e.main.temp_min-273.15),this.maxTemp3=Math.round(e.main.temp_max-273.15),this.weatherMain3=e.weather[0].main},e=>{alert(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(g))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-weather"]],decls:106,vars:51,consts:[[1,"weather"],[1,"d-flex","justify-content-between","weather__header"],[1,"weather__logo"],["src","../../../assets/images/Logo.png","alt","logo"],[1,"fs-30","fc-dark-navy"],[1,"d-flex","fs-18","fc-multi"],["type","checkbox","id","switch"],["for","switch",1,"mx-30"],[1,"px-100","py-100"],[1,"row"],[1,"col-md-4","d-flex","justify-content-center"],[1,"weather__country"],[1,"weather__country--state"],[1,"d-flex","justify-content-center","weather__country--img"],["src","../../../assets/images/rain.png","alt","",4,"ngIf"],["src","../../../assets/images/cloud.png","alt","",4,"ngIf"],["src","../../../assets/images/snow.png","alt","",4,"ngIf"],["src","../../../assets/images/sun.png","alt","",4,"ngIf"],[1,"weather__country--temp"],[1,"text-uppercase","text-center","fs-30","pt-2","fc-dark-blue"],[1,"pt-35","d-flex","px-66"],[1,"flex-grow-1"],[1,"fs-60","weather__country--min"],[1,"fas","fa-caret-down","fc-green-darksea"],[1,"fs-30","pl-10","fc-green-darksea"],[1,""],[1,"fs-60","weather__country--max"],[1,"fas","fa-caret-up","fc-red"],[1,"fs-30","fc-red"],["src","../../../assets/images/rain.png","alt",""],["src","../../../assets/images/cloud.png","alt",""],["src","../../../assets/images/snow.png","alt",""],["src","../../../assets/images/sun.png","alt",""]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4),n._uU(5,"TODAY"),n.qZA(),n.TgZ(6,"div",5),n.TgZ(7,"span"),n._uU(8,"LIGHT"),n.qZA(),n._UZ(9,"input",6),n.TgZ(10,"label",7),n._uU(11,"Toggle"),n.qZA(),n.TgZ(12,"span"),n._uU(13,"DARK"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"div",8),n.TgZ(15,"div",9),n.TgZ(16,"div",10),n.TgZ(17,"div",11),n.TgZ(18,"p",12),n._uU(19),n.qZA(),n.TgZ(20,"div",13),n.YNc(21,m,1,0,"img",14),n.ALo(22,"lowercase"),n.YNc(23,Z,1,0,"img",15),n.ALo(24,"lowercase"),n.YNc(25,h,1,0,"img",16),n.ALo(26,"lowercase"),n.YNc(27,u,1,0,"img",17),n.ALo(28,"lowercase"),n.qZA(),n.TgZ(29,"p",18),n._uU(30),n.qZA(),n.TgZ(31,"p",19),n._uU(32),n.qZA(),n.TgZ(33,"div",20),n.TgZ(34,"div",21),n.TgZ(35,"p",22),n._uU(36),n._UZ(37,"i",23),n.qZA(),n.TgZ(38,"p",24),n._uU(39,"Min"),n.qZA(),n.qZA(),n.TgZ(40,"div",25),n.TgZ(41,"p",26),n._uU(42),n._UZ(43,"i",27),n.qZA(),n.TgZ(44,"p",28),n._uU(45,"Max"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(46,"div",10),n.TgZ(47,"div",11),n.TgZ(48,"p",12),n._uU(49),n.qZA(),n.TgZ(50,"div",13),n.YNc(51,d,1,0,"img",14),n.ALo(52,"lowercase"),n.YNc(53,l,1,0,"img",15),n.ALo(54,"lowercase"),n.YNc(55,f,1,0,"img",16),n.ALo(56,"lowercase"),n.YNc(57,T,1,0,"img",17),n.ALo(58,"lowercase"),n.qZA(),n.TgZ(59,"p",18),n._uU(60),n.qZA(),n.TgZ(61,"p",19),n._uU(62),n.qZA(),n.TgZ(63,"div",20),n.TgZ(64,"div",21),n.TgZ(65,"p",22),n._uU(66),n._UZ(67,"i",23),n.qZA(),n.TgZ(68,"p",24),n._uU(69,"Min"),n.qZA(),n.qZA(),n.TgZ(70,"div",25),n.TgZ(71,"p",26),n._uU(72),n._UZ(73,"i",27),n.qZA(),n.TgZ(74,"p",28),n._uU(75,"Max"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(76,"div",10),n.TgZ(77,"div",11),n.TgZ(78,"p",12),n._uU(79),n.qZA(),n.TgZ(80,"div",13),n.YNc(81,w,1,0,"img",14),n.ALo(82,"lowercase"),n.YNc(83,_,1,0,"img",15),n.ALo(84,"lowercase"),n.YNc(85,A,1,0,"img",16),n.ALo(86,"lowercase"),n.YNc(87,q,1,0,"img",17),n.ALo(88,"lowercase"),n.qZA(),n.TgZ(89,"p",18),n._uU(90),n.qZA(),n.TgZ(91,"p",19),n._uU(92),n.qZA(),n.TgZ(93,"div",20),n.TgZ(94,"div",21),n.TgZ(95,"p",22),n._uU(96),n._UZ(97,"i",23),n.qZA(),n.TgZ(98,"p",24),n._uU(99,"Min"),n.qZA(),n.qZA(),n.TgZ(100,"div",25),n.TgZ(101,"p",26),n._uU(102),n._UZ(103,"i",27),n.qZA(),n.TgZ(104,"p",28),n._uU(105,"Max"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(19),n.Oqu(t.name1),n.xp6(2),n.Q6J("ngIf","rain"===n.lcZ(22,27,t.weatherMain1)),n.xp6(2),n.Q6J("ngIf","clouds"===n.lcZ(24,29,t.weatherMain1)),n.xp6(2),n.Q6J("ngIf","snow"===n.lcZ(26,31,t.weatherMain1)),n.xp6(2),n.Q6J("ngIf","clear"===n.lcZ(28,33,t.weatherMain1)),n.xp6(3),n.Oqu(t.temp1),n.xp6(2),n.Oqu(t.weatherMain1),n.xp6(4),n.Oqu(t.minTemp1),n.xp6(6),n.hij("",t.maxTemp1," "),n.xp6(7),n.Oqu(t.name2),n.xp6(2),n.Q6J("ngIf","rain"===n.lcZ(52,35,t.weatherMain2)),n.xp6(2),n.Q6J("ngIf","clouds"===n.lcZ(54,37,t.weatherMain2)),n.xp6(2),n.Q6J("ngIf","snow"===n.lcZ(56,39,t.weatherMain2)),n.xp6(2),n.Q6J("ngIf","clear"===n.lcZ(58,41,t.weatherMain2)),n.xp6(3),n.Oqu(t.temp2),n.xp6(2),n.Oqu(t.weatherMain2),n.xp6(4),n.Oqu(t.minTemp2),n.xp6(6),n.hij("",t.maxTemp2," "),n.xp6(7),n.Oqu(t.name3),n.xp6(2),n.Q6J("ngIf","rain"===n.lcZ(82,43,t.weatherMain3)),n.xp6(2),n.Q6J("ngIf","clouds"===n.lcZ(84,45,t.weatherMain3)),n.xp6(2),n.Q6J("ngIf","snow"===n.lcZ(86,47,t.weatherMain3)),n.xp6(2),n.Q6J("ngIf","clear"===n.lcZ(88,49,t.weatherMain3)),n.xp6(3),n.Oqu(t.temp3),n.xp6(2),n.Oqu(t.weatherMain3),n.xp6(4),n.Oqu(t.minTemp3),n.xp6(6),n.hij("",t.maxTemp3," "))},directives:[i.O5],pipes:[i.i8],styles:[""]}),e})();var U=a(319);const v=[{path:"",component:x}];let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[U.Bz.forChild(v)],U.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,M]]}),e})()}}]);