(this["webpackJsonpjob-search"]=this["webpackJsonpjob-search"]||[]).push([[0],{27:function(n,e,t){},63:function(n,e,t){"use strict";t.r(e);var i,o,a,c,r,s,p,d,l,b,u,x,j,h,f,m,v,O,g,y,w,k=t(0),S=t.n(k),I=t(10),U=t.n(I),L=t(9),P=t(16),z=t.n(P),J=t(29),_=t(2),C=t(3),D=t(30),R=t.n(D),T=function(n){return R.a.get("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=".concat("041d53c8","&app_key=").concat("6db8813c6cff51c2717428ba63b7feac","&results_per_page=20&what=").concat(n.jobTitle,"&where=").concat(n.location,"&distance=").concat(n.searchRadius),{headers:{"content-type":"application/json"}}).then((function(n){return n.data}))},E=t(11),M=t(6),H=t.n(M),V=function(n){return 100*Math.round(n/100)},B=function(n,e){return n.findIndex((function(n){return n.id===e}))},A={jobList:{count:0,mean:0,results:[],topClass:""},search:{location:"",jobTitle:"",searchRadius:0},mapView:{center:[51.507222,-.12755],zoom:12},selectedJobItem:void 0,jobPopUp:!1,hoverPopUp:{isDisplayed:!1,title:"",company:"",coords:[0,0]}},F=Object(E.b)({name:"appSlice",initialState:A,reducers:{setSearch:function(n,e){var t=e.payload;n.search.location=t.location,n.search.jobTitle=t.jobTitle.split(" ").join("%20"),n.search.searchRadius=t.searchRadius},setJobList:function(n,e){var t=e.payload;n.jobList=t.response},setSelectedJobItem:function(n,e){var t=e.payload,i=B(n.jobList.results,t.id);n.selectedJobItem=n.jobList.results[i],void 0===n.selectedJobItem.longitude?alert("No coordinates for this job"):n.mapView.center=[n.selectedJobItem.latitude,n.selectedJobItem.longitude],n.jobPopUp=!0},updatePopUpState:function(n,e){var t=e.payload;n.jobPopUp=t.click},updateHoverPopUpState:function(n,e){var t=e.payload,i=B(n.jobList.results,t.id);n.hoverPopUp.isDisplayed=t.event,n.hoverPopUp.title=H()(n.jobList.results[i].title),n.hoverPopUp.company=n.jobList.results[i].company.display_name,n.hoverPopUp.coords=[n.jobList.results[i].latitude,n.jobList.results[i].longitude]}}}),N=F.actions,q=N.setSearch,G=N.setJobList,K=N.setSelectedJobItem,Q=N.updatePopUpState,W=N.updateHoverPopUpState,X=F.reducer,Y=(t(27),t(1)),Z=C.a.div(i||(i=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  height: 100px;\n  margin-top: 10px;\n  padding: 10px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  justify-content: space-around;\n  transition: 0.3s;\n  :hover {\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  }\n"]))),$=C.a.div(o||(o=Object(_.a)(["\n  font-weight: 400;\n  font-size: 20px;\n"]))),nn=function(n){var e=n.item,t=n.submitID,i=n.submitEvent;return Object(Y.jsxs)(Z,{onClick:function(){t(e.id),i(!0,e.id)},children:[Object(Y.jsx)($,{children:H()(e.title)}),Object(Y.jsx)("div",{children:H()(e.company.display_name)}),Object(Y.jsxs)("div",{children:["\xa3",V(e.salary_min)+" "," - \xa3",V(e.salary_max)]})]})},en=C.a.div(a||(a=Object(_.a)(["\n  position: relative;\n  display: inline-block;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  top: 320px;\n  z-index: 5;\n"]))),tn=function(n){var e=n.jobs,t=n.submitID,i=n.submitEvent;return Object(Y.jsx)(en,{children:e.map((function(n){return Object(Y.jsx)(nn,{item:n,submitID:t,submitEvent:i},n.id)}))})},on=t(12),an=C.a.div(c||(c=Object(_.a)(["\n  height: 50px;\n  width: 220px;\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n"]))),cn=C.a.div(r||(r=Object(_.a)(["\n  font-size: 15px;\n"]))),rn=C.a.div(s||(s=Object(_.a)(["\n  font-size: 12px;\n"]))),sn=function(n){var e=n.title,t=n.company;return Object(Y.jsxs)(an,{children:[Object(Y.jsx)(cn,{children:e}),Object(Y.jsx)(rn,{children:t})]})},pn=C.a.div(p||(p=Object(_.a)(["\n  position: fixed;\n  /* left: 25%; */\n  width: 120%;\n  height: 100%;\n"]))),dn=function(n,e,t,i){return"https://api.maptiler.com/maps/streets/256/".concat(t,"/").concat(n,"/").concat(e).concat(i>=2?"@2x":"",".png?key=").concat("tLsFLpESk6ikup9Az8ia")},ln=function(n){var e=n.points,t=n.center,i=n.zoom,o=n.submitIDClick,a=n.submitIDHover,c=n.hoverPopUp,r=n.popUp;return Object(Y.jsx)(pn,{children:Object(Y.jsxs)(on.a,{center:t,zoom:i,provider:dn,children:[e.map((function(n){return Object(Y.jsx)(on.b,{anchor:n.coords,color:"#3875c9",onClick:function(){return o(n.id)},onMouseOver:function(){return a(!0,n.id)},onMouseOut:function(){return a(!1,n.id)}},n.id)})),c.isDisplayed||r?Object(Y.jsx)(on.c,{anchor:c.coords,offset:[120,100],children:Object(Y.jsx)(sn,{title:c.title,company:c.company})}):null]})})},bn=t(13),un=C.a.form(d||(d=Object(_.a)(["\n  position: fixed;\n  height: 300px;\n  width: 400px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex;\n  border-radius: 0 0 10px 10px;\n  box-shadow: rgba(7, 6, 6, 0.2) 0px 2px 8px 0px;\n  z-index: 10;\n  padding: 10px;\n"]))),xn=C.a.div(l||(l=Object(_.a)(["\n  width: 100%;\n"]))),jn=C.a.input(b||(b=Object(_.a)(['\n  font-family: "Montserrat", sans-serif;\n  font-weight: 300;\n  width: 100%;\n  height: 30px;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid rgb(0, 137, 216);\n  outline: none;\n  padding-top: 5px;\n']))),hn=C.a.div(u||(u=Object(_.a)(["\n  text-align: center;\n  font-size: 30px;\n  font-weight: 400;\n  padding: 10px 0px;\n  border-bottom: 1px solid rgb(0, 137, 216);\n  letter-spacing: 9.5px;\n"]))),fn=C.a.div(x||(x=Object(_.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),mn=C.a.button(j||(j=Object(_.a)(['\n  color: white;\n  width: 60px;\n  background: rgb(0, 137, 216);\n  border: none;\n  height: 35px;\n  padding: 10px 5px;\n  border-radius: 5px;\n  transition: 0.2s;\n  font-family: "Montserrat", sans-serif;\n  :hover {\n    background: #3279a8;\n  }\n']))),vn=C.a.div(h||(h=Object(_.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n"]))),On=C.a.input(f||(f=Object(_.a)(["\n  width: 30px;\n  border: 1px solid rgb(0, 137, 216);\n  border-radius: 5px;\n  padding: 9px 5px;\n  margin-left: 10px;\n  transition: 0.2s;\n  :hover {\n    box-shadow: rgba(0, 90, 173, 0.2) 0px 3px 6px,\n      rgba(0, 90, 173, 0.2) 0px 3px 6px;\n  }\n"]))),gn=function(n){var e=n.submit,t=Object(k.useState)(""),i=Object(bn.a)(t,2),o=i[0],a=i[1],c=Object(k.useState)(""),r=Object(bn.a)(c,2),s=r[0],p=r[1],d=Object(k.useState)(0),l=Object(bn.a)(d,2),b=l[0],u=l[1];return Object(Y.jsxs)(un,{onSubmit:function(n){n.preventDefault(),e({location:o,jobTitle:s,searchRadius:b})},children:[Object(Y.jsx)(hn,{children:"JOB SEARCH"}),Object(Y.jsxs)(xn,{children:[Object(Y.jsx)("div",{children:"Job Title"}),Object(Y.jsx)(jn,{type:"text",placeholder:"Job Title",value:s,onChange:function(n){return p(n.target.value)}})]}),Object(Y.jsxs)(xn,{children:[Object(Y.jsx)("div",{children:"Location"}),Object(Y.jsx)(jn,{type:"text",placeholder:"Location",value:o,onChange:function(n){return a(n.target.value)}})]}),Object(Y.jsxs)(fn,{children:[Object(Y.jsxs)(vn,{children:[Object(Y.jsx)("div",{children:"Search Radius km"}),Object(Y.jsx)(On,{type:"number",placeholder:"Search Radius",value:b,onChange:function(n){return u(parseInt(n.target.value))}})]}),Object(Y.jsx)(mn,{type:"submit",children:"Search"})]})]})},yn=C.a.div(m||(m=Object(_.a)(["\n  width: 400px;\n  position: fixed;\n  top: 330px;\n  height: 60%;\n  z-index: 10;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  padding: 10px;\n"]))),wn=C.a.div(v||(v=Object(_.a)(["\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  height: 600px;\n  justify-content: space-between;\n  background: white;\n  padding: 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n"]))),kn=C.a.div(O||(O=Object(_.a)(["\n  font-size: 30px;\n  font-weight: 400;\n  padding: 10px 0px;\n  border-bottom: 1px solid lightgrey;\n"]))),Sn=C.a.button(g||(g=Object(_.a)(['\n  align-self: flex-end;\n  color: white;\n  width: 60px;\n  background: rgb(0, 137, 216);\n  border: none;\n  height: 35px;\n  padding: 10px 5px;\n  border-radius: 5px;\n  transition: 0.2s;\n  font-family: "Montserrat", sans-serif;\n  :hover {\n    background: #3279a8;\n  }\n']))),In=function(n){var e=n.job,t=n.onClick;return Object(Y.jsx)(yn,{children:e?Object(Y.jsxs)(wn,{children:[Object(Y.jsx)(kn,{children:H()(e.title)}),Object(Y.jsx)("div",{children:e.company.display_name}),Object(Y.jsx)("div",{children:e.location.display_name}),Object(Y.jsx)("div",{children:e.description}),Object(Y.jsx)("div",{children:e.contract_type}),Object(Y.jsxs)("div",{children:["\xa3",V(e.salary_min)," - \xa3",V(e.salary_max)]}),Object(Y.jsx)(Sn,{onClick:function(){return t(!1)},children:"Back"})]}):null})},Un=C.a.div(y||(y=Object(_.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100%;\n"]))),Ln=C.a.div(w||(w=Object(_.a)(["\n  position: relative;\n  width: 25%;\n  height: 100%;\n  margin-left: 10px;\n"])));var Pn=function(n){return n.state},zn=function(){var n,e=Object(L.b)(),t=Object(L.c)(Pn);return S.a.useEffect((function(){function n(){return(n=Object(J.a)(z.a.mark((function n(t){var i;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T(t);case 3:i=n.sent,e(G({response:i})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(t.search)}),[e,t.search]),Object(Y.jsxs)(Un,{children:[Object(Y.jsxs)(Ln,{children:[Object(Y.jsx)(gn,{submit:function(n){var t=n.location,i=n.jobTitle,o=n.searchRadius;e(q({location:t,jobTitle:i,searchRadius:o}))}}),t.jobPopUp?Object(Y.jsx)(In,{job:t.selectedJobItem,onClick:function(n){e(Q({click:n}))}}):Object(Y.jsx)(tn,{jobs:t.jobList.results,submitID:function(n){return e(K({id:n}))},submitEvent:function(n,t){return e(W({event:n,id:t}))}})]}),Object(Y.jsx)(ln,{points:(n=t.jobList.results,n.map((function(n){return{id:n.id,coords:[n.latitude,n.longitude]}}))),center:t.mapView.center,zoom:t.mapView.zoom,submitIDClick:function(n){return e(K({id:n}))},submitIDHover:function(n,t){return e(W({event:n,id:t}))},hoverPopUp:t.hoverPopUp,popUp:t.jobPopUp})]})},Jn=Object(E.a)({reducer:{state:X}});U.a.render(Object(Y.jsx)(L.a,{store:Jn,children:Object(Y.jsx)(S.a.StrictMode,{children:Object(Y.jsx)(zn,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.6a7e7393.chunk.js.map