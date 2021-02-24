(this["webpackJsonpjob-search"]=this["webpackJsonpjob-search"]||[]).push([[0],{27:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var i,c,a,o,r,s,d,p,l,b,u,j,x,h,f,m=n(0),O=n.n(m),v=n(10),g=n.n(v),y=n(9),w=n(15),k=n.n(w),S=n(29),I=n(2),J=n(3),z=n(30),L=n.n(z),_=function(e){return L.a.get("https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=".concat("041d53c8","&app_key=").concat("6db8813c6cff51c2717428ba63b7feac","&results_per_page=20&what=").concat(e.jobTitle,"&where=").concat(e.location,"&distance=").concat(e.searchRadius),{headers:{"content-type":"application/json"}}).then((function(e){return e.data}))},C=n(11),R={jobList:{count:0,mean:0,results:[],topClass:""},search:{location:"",jobTitle:"",searchRadius:0},selectedJobItem:void 0,mapView:{center:[51.507222,-.12755],zoom:12},jobPopUp:!1},T=Object(C.b)({name:"appSlice",initialState:R,reducers:{setSearch:function(e,t){var n=t.payload;e.search.location=n.location,e.search.jobTitle=n.jobTitle.split(" ").join("%20"),e.search.searchRadius=n.searchRadius},setJobList:function(e,t){var n=t.payload;e.jobList=n.response},setSelectedJobItem:function(e,t){var n=t.payload,i=e.jobList.results.findIndex((function(e){return e.id===n.id}));e.selectedJobItem=e.jobList.results[i],void 0===e.selectedJobItem.longitude?alert("No coordinates for this job"):e.mapView.center=[e.selectedJobItem.latitude,e.selectedJobItem.longitude],e.jobPopUp=!0},updatePopUpState:function(e,t){var n=t.payload;e.jobPopUp=n.click}}}),D=T.actions,P=D.setSearch,U=D.setJobList,E=D.setSelectedJobItem,V=D.updatePopUpState,B=T.reducer,A=(n(27),function(e){return 100*Math.round(e/100)}),M=n(6),F=n.n(M),H=n(1),N=J.a.div(i||(i=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  height: 100px;\n  margin-top: 10px;\n  padding: 10px;\n  background: white;\n  border-radius: 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  justify-content: space-around;\n  transition: 0.3s;\n  :hover {\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  }\n"]))),q=J.a.div(c||(c=Object(I.a)(["\n  font-weight: 400;\n  font-size: 20px;\n"]))),G=function(e){var t=e.item,n=e.submitID;return Object(H.jsxs)(N,{onClick:function(){return n(t.id)},children:[Object(H.jsx)(q,{children:F()(t.title)}),Object(H.jsx)("div",{children:F()(t.company.display_name)}),Object(H.jsxs)("div",{children:["\xa3",A(t.salary_min)+" "," - \xa3",A(t.salary_max)]})]})},K=J.a.div(a||(a=Object(I.a)(["\n  position: relative;\n  display: inline-block;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  top: 320px;\n  z-index: 5;\n"]))),Q=function(e){var t=e.jobs,n=e.submitID;return Object(H.jsx)(K,{children:t.map((function(e){return Object(H.jsx)(G,{item:e,submitID:n},e.id)}))})},W=n(16),X=J.a.div(o||(o=Object(I.a)(["\n  position: fixed;\n  /* left: 25%; */\n  width: 120%;\n  height: 100%;\n"]))),Y=function(e,t,n,i){return"https://api.maptiler.com/maps/streets/256/".concat(n,"/").concat(e,"/").concat(t).concat(i>=2?"@2x":"",".png?key=").concat("tLsFLpESk6ikup9Az8ia")},Z=function(e){var t=e.points,n=e.center,i=e.zoom,c=e.submitID;return Object(H.jsx)(X,{children:Object(H.jsx)(W.a,{center:n,zoom:i,provider:Y,children:t.map((function(e){return Object(H.jsx)(W.b,{anchor:e.coords,color:"#3875c9",onClick:function(){return c(e.id)}},e.id)}))})})},$=n(12),ee=J.a.form(r||(r=Object(I.a)(["\n  position: fixed;\n  height: 300px;\n  width: 20%;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex;\n  border-radius: 0 0 10px 10px;\n  box-shadow: rgba(7, 6, 6, 0.2) 0px 2px 8px 0px;\n  z-index: 10;\n  padding: 10px;\n"]))),te=J.a.input(s||(s=Object(I.a)(["\n  height: 30px;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid grey;\n  outline: none;\n"]))),ne=J.a.div(d||(d=Object(I.a)(["\n  font-size: 30px;\n  font-weight: 400;\n  padding: 10px 0px;\n  border-bottom: 1px solid lightgrey;\n  letter-spacing: 9.5px;\n"]))),ie=J.a.div(p||(p=Object(I.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),ce=J.a.input(l||(l=Object(I.a)(["\n  width: 50px;\n"]))),ae=function(e){var t=e.submit,n=O.a.useState(""),i=Object($.a)(n,2),c=i[0],a=i[1],o=O.a.useState(""),r=Object($.a)(o,2),s=r[0],d=r[1],p=O.a.useState(0),l=Object($.a)(p,2),b=l[0],u=l[1];return Object(H.jsxs)(ee,{onSubmit:function(e){e.preventDefault(),t({location:c,jobTitle:s,searchRadius:b})},children:[Object(H.jsx)(ne,{children:"JOB SEARCH"}),Object(H.jsx)("div",{children:"Location"}),Object(H.jsx)(te,{type:"text",placeholder:"Location",value:c,onChange:function(e){return a(e.target.value)}}),Object(H.jsx)("div",{children:"Job Title"}),Object(H.jsx)(te,{type:"text",placeholder:"Job Title",value:s,onChange:function(e){return d(e.target.value)}}),Object(H.jsxs)(ie,{children:[Object(H.jsx)("div",{children:"Search Radius km"}),Object(H.jsx)(ce,{type:"number",placeholder:"Search Radius",value:b,onChange:function(e){return u(parseInt(e.target.value))}}),Object(H.jsx)("button",{type:"submit",children:"Search"})]})]})},oe=J.a.div(b||(b=Object(I.a)(["\n  width: 20%;\n  position: fixed;\n  top: 330px;\n  height: 60%;\n  z-index: 10;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  padding: 10px;\n"]))),re=J.a.div(u||(u=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 92%;\n  height: 600px;\n  justify-content: space-between;\n  background: white;\n  padding: 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n"]))),se=J.a.div(j||(j=Object(I.a)(["\n  font-size: 30px;\n  font-weight: 400;\n  padding: 10px 0px;\n  border-bottom: 1px solid lightgrey;\n"]))),de=J.a.button(x||(x=Object(I.a)(["\n  align-self: flex-end;\n  width: 50px;\n"]))),pe=function(e){var t=e.job,n=e.onClick;return Object(H.jsx)(oe,{children:t?Object(H.jsxs)(re,{children:[Object(H.jsx)(se,{children:F()(t.title)}),Object(H.jsx)("div",{children:F()(t.company.display_name)}),Object(H.jsx)("div",{children:F()(t.location.display_name)}),Object(H.jsx)("div",{children:F()(t.description)}),Object(H.jsx)("div",{children:F()(t.contract_type)}),Object(H.jsxs)("div",{children:[A(t.salary_min)," -"," ",A(t.salary_max)]}),Object(H.jsx)(de,{onClick:function(){return n(!1)},children:"Back"})]}):null})},le=J.a.div(h||(h=Object(I.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100%;\n"]))),be=J.a.div(f||(f=Object(I.a)(["\n  position: relative;\n  width: 25%;\n  height: 100%;\n  margin-left: 10px;\n"])));var ue=function(e){return e.state},je=function(){var e,t=Object(y.b)(),n=Object(y.c)(ue);return O.a.useEffect((function(){function e(){return(e=Object(S.a)(k.a.mark((function e(n){var i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(n);case 3:i=e.sent,t(U({response:i})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(n.search)}),[t,n.search]),Object(H.jsxs)(le,{children:[Object(H.jsxs)(be,{children:[Object(H.jsx)(ae,{submit:function(e){var n=e.location,i=e.jobTitle,c=e.searchRadius;t(P({location:n,jobTitle:i,searchRadius:c}))}}),n.jobPopUp?Object(H.jsx)(pe,{job:n.selectedJobItem,onClick:function(e){return t(V({click:e}))}}):Object(H.jsx)(Q,{jobs:n.jobList.results,submitID:function(e){return t(E({id:e}))}})]}),Object(H.jsx)(Z,{points:(e=n.jobList.results,e.map((function(e){return{id:e.id,coords:[e.latitude,e.longitude]}}))),center:n.mapView.center,zoom:n.mapView.zoom,submitID:function(e){return t(E({id:e}))}})]})},xe=Object(C.a)({reducer:{state:B}});g.a.render(Object(H.jsx)(y.a,{store:xe,children:Object(H.jsx)(O.a.StrictMode,{children:Object(H.jsx)(je,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.90baa0f4.chunk.js.map