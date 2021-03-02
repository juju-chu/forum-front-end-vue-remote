(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container py-5"},[s("UserProfileCard",{attrs:{user:e.user,"is-current-user":e.currentUser.id===e.user.id,"initial-is-followed":e.isFollowed}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("UserFollowingsCard",{attrs:{followings:e.followings}}),s("UserFollowersCard",{attrs:{followers:e.followers}})],1),s("div",{staticClass:"col-md-8"},[s("UserCommentsCard",{attrs:{comments:e.comments}}),s("UserFavoritedRestaurantsCard",{attrs:{"favorited-restaurants":e.favoritedRestaurants}})],1)])],1)},a=[],n=s("1da1"),i=s("5530"),o=(s("96cf"),s("b0c0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"300px",height:"300px"}})]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[e._v(" "+e._s(e.user.name)+" ")]),s("p",{staticClass:"card-text"},[e._v(" "+e._s(e.user.email)+" ")]),s("ul",{staticClass:"list-unstyled"},[s("li",[s("strong",[e._v(e._s(e.user.commentsLength))]),e._v(" 已評論餐廳 ")]),s("li",[s("strong",[e._v(e._s(e.user.favoritedRestaurantsLength))]),e._v(" 收藏的餐廳 ")]),s("li",[s("strong",[e._v(e._s(e.user.followingsLength))]),e._v(" followings (追蹤者) ")]),s("li",[s("strong",[e._v(e._s(e.user.followersLength))]),e._v(" followers (追隨者) ")])]),e.isCurrentUser?[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"user-edit",params:{id:e.user.id}}}},[e._v(" Edit ")])]:[e.isFollowed?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.user.id)}}},[e._v(" 取消追蹤 ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.user.id)}}},[e._v(" 追蹤 ")])]],2)])])])}),l=[],c=s("2708"),d=s("4cce"),u=s("2fa3"),m={name:"UserProfileCard",mixins:[c["a"]],props:{user:{type:Object,required:!0},isCurrentUser:{type:Boolean,required:!0},initialIsFollowed:{type:Boolean,required:!0}},data:function(){return{isFollowed:this.initialIsFollowed,isProcessing:!1}},watch:{initialIsFollowed:function(e){this.isFollowed=Object(i["a"])(Object(i["a"])({},this.isFollowed),e)}},methods:{addFollowing:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t.isProcessing=!0,s.next=4,d["a"].addFollowing(e);case 4:if(r=s.sent,a=r.data,"success"===a.status){s.next=8;break}throw new Error(a.message);case 8:t.isFollowed=!0,s.next=15;break;case 11:s.prev=11,s.t0=s["catch"](0),console.log(s.t0),u["a"].fire({icon:"error",title:"無法追蹤，請稍後再試"});case 15:t.isProcessing=!1;case 16:case"end":return s.stop()}}),s,null,[[0,11]])})))()},deleteFollowing:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t.isProcessing=!0,s.next=4,d["a"].deleteFollowing(e);case 4:if(r=s.sent,a=r.data,"success"===a.status){s.next=8;break}throw new Error(a.message);case 8:t.isFollowed=!1,s.next=15;break;case 11:s.prev=11,s.t0=s["catch"](0),console.log(s.t0),u["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 15:t.isProcessing=!1;case 16:case"end":return s.stop()}}),s,null,[[0,11]])})))()}}},f=m,g=s("2877"),v=Object(g["a"])(f,o,l,!1,null,null,null),w=v.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-header"},[s("strong",[e._v(e._s(e.followings.length))]),e._v(" followings (追蹤者) ")]),s("div",{staticClass:"card-body"},e._l(e.followings,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"user",params:{id:t.id}}}},[s("img",{staticClass:"mr-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},h=[],C={name:"UserFollowingsCard",mixins:[c["a"]],props:{followings:{type:Array,required:!0}}},_=C,b=Object(g["a"])(_,p,h,!1,null,null,null),F=b.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[e._v(e._s(e.followers.length))]),e._v(" followers (追隨者) ")]),s("div",{staticClass:"card-body"},e._l(e.followers,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"user",params:{id:t.id}}}},[s("img",{staticClass:"mr-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},x=[],R={name:"UserFollowersCard",mixins:[c["a"]],props:{followers:{type:Array,required:!0}}},k=R,U=Object(g["a"])(k,y,x,!1,null,null,null),j=U.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[e._v(e._s(e.comments.length))]),e._v(" 已評論餐廳 ")]),s("div",{staticClass:"card-body"},e._l(e.comments,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.Restaurant.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.Restaurant.image),width:"60",height:"60"}})])})),1)])},L=[],P={mixins:[c["a"]],name:"UserCommentsCard",props:{comments:{type:Array,required:!0}}},E=P,I=Object(g["a"])(E,O,L,!1,null,null,null),q=I.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[e._v(e._s(e.favoritedRestaurants.length))]),e._v(" 收藏的餐廳 ")]),s("div",{staticClass:"card-body"},e._l(e.favoritedRestaurants,(function(t){return s("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.id}}}},[s("img",{staticClass:"mr-1 mb-1",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},D=[],A={name:"UserFavoritedRestaurantsCard",mixins:[c["a"]],props:{favoritedRestaurants:{type:Array,required:!0}}},B=A,J=Object(g["a"])(B,$,D,!1,null,null,null),z=J.exports,G=s("2f62"),H={name:"User",components:{UserProfileCard:w,UserFollowingsCard:F,UserFollowersCard:j,UserCommentsCard:q,UserFavoritedRestaurantsCard:z},data:function(){return{user:{id:-1,image:"",name:"",email:"",commentsLength:-1,favoritedRestaurantsLength:-1,followingsLength:-1,followersLength:-1},followings:[],followers:[],comments:[],favoritedRestaurants:[],isFollowed:!1}},computed:Object(i["a"])({},Object(G["b"])(["currentUser"])),created:function(){var e=this.$route.params.id;this.fetchData(e)},beforeRouteUpdate:function(e,t,s){var r=e.params.id;this.fetchData(r),s()},methods:{fetchData:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r,a,n,i,o,l,c,m,f,g,v;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,d["a"].get({userId:e});case 3:r=s.sent,a=r.data,n=a.profile,i=n.id,o=n.image,l=n.name,c=n.email,m=n.Comments,f=n.FavoritedRestaurants,g=n.Followers,v=n.Followings,t.user={id:i,name:l,image:o,email:c,commentsLength:m.length,favoritedRestaurantsLength:f.length,followingsLength:v.length,followersLength:g.length},t.followings=a.profile.Followings,t.followers=a.profile.Followers,t.comments=a.profile.Comments,t.favoritedRestaurants=a.profile.FavoritedRestaurants,t.isFollowed=a.isFollowed,s.next=18;break;case 14:s.prev=14,s.t0=s["catch"](0),console.log(s.t0),u["a"].fire({icon:"error",title:"無法取得資料，請稍後再試"});case 18:case"end":return s.stop()}}),s,null,[[0,14]])})))()}}},K=H,M=Object(g["a"])(K,r,a,!1,null,null,null);t["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.99231b39.js.map