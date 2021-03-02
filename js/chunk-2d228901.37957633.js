(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[e.isLoading?e._e():r("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?r("img",{attrs:{src:e.user.image}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")])])])},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("d3b7"),r("25f0"),r("b0c0"),r("2b3d"),r("3ca3"),r("ddb0"),r("4cce")),c=r("2f62"),u=r("2fa3"),m={name:"UserEdit",data:function(){return{user:{id:-1,name:"",image:""},isLoading:!0,isProcessing:!1}},computed:Object(i["a"])({},Object(c["b"])(["currentUser"])),watch:{currentUser:function(){this.setUser()}},created:function(){-1!==this.currentUser.id&&this.setUser()},methods:{setUser:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$route.params.id,e.currentUser.id.toString()!==r.toString()&&e.$router.push({name:"not-found"}),t.prev=2,t.next=5,o["a"].get({userId:r});case 5:a=t.sent,n=a.data,e.user=Object(i["a"])(Object(i["a"])({},e.user),{},{id:n.profile.id,name:n.profile.name,image:n.profile.image}),e.isLoading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0),u["a"].fire({icon:"error",title:"無法取得資料，請稍後再試"});case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))()},handleFileChange:function(e){var t=e.target.files;0===t.length?this.user.image="":this.user.image=window.URL.createObjectURL(t[0])},handleSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.target,n=new FormData(a),t.user.name||u["a"].fire({icon:"warning",title:"請填入姓名"}),r.prev=3,t.isProcessing=!0,r.next=7,o["a"].update({userId:t.user.id,formData:n});case 7:if(s=r.sent,i=s.data,"success"===i.status){r.next=11;break}throw new Error(i.message);case 11:t.$router.push({name:"user",params:{id:t.user.id}}),r.next=19;break;case 14:r.prev=14,r.t0=r["catch"](3),console.log(r.t0),u["a"].fire({icon:"error",title:"無法更新，請稍後再試"}),t.isProcessing=!1;case 19:case"end":return r.stop()}}),r,null,[[3,14]])})))()}}},l=m,d=r("2877"),g=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d228901.37957633.js.map