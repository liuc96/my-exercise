webpackJsonp([46],{"+cbH":function(t,e){},"6gZd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("4YfN"),a=i.n(s),o=i("9rMa"),r={name:"card_change_pro",data:function(){return{sellersDialogVisible:!1,ProPictureImageUrl:"",proName:"",proPrice:"",proSummary:"",proID:-1,proList:[],proDialogVisible:!1,proType:null,listIndex:-1}},methods:{previewPro:function(t){this.ProPictureImageUrl=t,this.sellersDialogVisible=!0},getShopAllPro:function(){var t=this;this.ajax.get(this.BASE_URL+"/nearby/goods",{params:{shop_id:this.shopID}}).then(function(e){"获取成功"===e.data.message&&(t.proList=e.data.data.products)}).catch(function(t){})},addPro:function(){this.proType=1,this.proDialogVisible=!0,this.ProPictureImageUrl="",this.proName="",this.proPrice="",this.proSummary=""},addProConfirm:function(){var t=this;this.proType?this.ajax.post(this.BASE_URL+"/shop/product_add",this.qs.stringify({shop_id:this.shopID,avatar:this.ProPictureImageUrl,title:this.proName,price:this.proPrice,summary:this.proSummary})).then(function(e){t.$message({type:"success",message:"添加成功"}),t.getShopAllPro()}).catch(function(t){}):this.ajax.post(this.BASE_URL+"/shop/product_edit",this.qs.stringify({product_id:this.proID,avatar:this.ProPictureImageUrl,title:this.proName,price:this.proPrice,summary:this.proSummary})).then(function(e){t.$message({type:"success",message:"修改成功"}),t.proList[t.listIndex].avatar=t.ProPictureImageUrl}).catch(function(t){}),this.proDialogVisible=!1},changePro:function(t,e,i){var s=this;this.proType=0,this.proDialogVisible=!0,t&&(this.ProPictureImageUrl=t),this.listIndex=i,this.ajax.get(this.BASE_URL+"/shop/product",{params:{product_id:e}}).then(function(t){if("获取成功"===t.data.message){var i=t.data.data;s.proName=i.title,s.proPrice=i.price,s.proSummary=i.summary,s.proID=e}}).catch(function(t){})},delPro:function(t,e){var i=this;this.$confirm("删除后,该产品或服务将不存在, 是否继续?","删除产品或服务",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.ajax.post(i.BASE_URL+"/shop/product_move",i.qs.stringify({product_id:e})).then(function(e){i.$message({type:"success",message:"删除成功!"}),i.proList.splice(t,1)}).catch(function(t){i.$message({type:"info",message:"服务器错误"})})}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},beforeProPictureUpload:function(t){},handleProPictureSuccess:function(t,e){this.ProPictureImageUrl=t.data.imgUrl}},computed:a()({},Object(o.d)(["shopID","userID"])),created:function(){this.getShopAllPro()}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-change-pro"},[i("div",{staticClass:"el-upload el-upload--picture-card",attrs:{tabindex:"0"},on:{click:t.addPro}},[i("i",{staticClass:"el-icon-plus",attrs:{"data-v-2205e1ce":""}}),i("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",multiple:"multiple"}})]),t._v(" "),i("ul",{staticClass:"el-upload-list el-upload-list--picture-card"},t._l(t.proList,function(e,s){return i("li",{key:s,staticClass:"el-upload-list__item is-success",attrs:{tabindex:"0"}},[i("img",{staticClass:"el-upload-list__item-thumbnail",staticStyle:{"object-fit":"cover"},attrs:{src:e.avatar,alt:""}}),t._v(" "),t._m(0,!0),t._v(" "),i("el-dialog",{attrs:{visible:t.sellersDialogVisible},on:{"update:visible":function(e){t.sellersDialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.ProPictureImageUrl,alt:""}})]),t._v(" "),i("span",{staticClass:"el-upload-list__item-actions"},[i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(i){t.previewPro(e.avatar)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),t._v(" "),i("span",{staticClass:"el-upload-list__item-preview",on:{click:function(i){t.changePro(e.avatar,e.product_id,s)}}},[i("i",{staticClass:"el-icon-edit"})]),t._v(" "),i("span",{staticClass:"el-upload-list__item-delete",on:{click:function(i){t.delPro(s,e.product_id)}}},[i("i",{staticClass:"el-icon-delete"})])])],1)})),t._v(" "),i("el-dialog",{attrs:{title:0===t.proType?"修改产品或服务":"添加产品或服务",visible:t.proDialogVisible,width:"602px"},on:{"update:visible":function(e){t.proDialogVisible=e}}},[i("div",{staticClass:"change-pro clr-semi"},[i("div",[i("div",{staticClass:"title"},[i("div",[t._v("名称")])]),t._v(" "),i("div",{staticClass:"content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.proName,expression:"proName"}],attrs:{type:"text",placeholder:"产品服务或名称"},domProps:{value:t.proName},on:{input:function(e){e.target.composing||(t.proName=e.target.value)}}})])]),t._v(" "),i("div",[i("div",{staticClass:"title"},[i("div",[t._v("图片")])]),t._v(" "),i("div",{staticClass:"content pro-picture-uploader"},[i("el-upload",{attrs:{action:"https://api.loophot.com/upload/index","show-file-list":!1,"on-success":t.handleProPictureSuccess,"before-upload":t.beforeProPictureUpload}},[t.ProPictureImageUrl?i("img",{attrs:{src:t.ProPictureImageUrl}}):i("i",{staticClass:"el-icon-plus"})])],1)]),t._v(" "),i("div",[i("div",{staticClass:"title"},[i("div",[t._v("价格(元)")])]),t._v(" "),i("div",{staticClass:"content"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.proPrice,expression:"proPrice"}],attrs:{type:"text",placeholder:"请填写价格"},domProps:{value:t.proPrice},on:{input:function(e){e.target.composing||(t.proPrice=e.target.value)}}})])]),t._v(" "),i("div",[i("div",{staticClass:"title"},[i("div",[t._v("介绍")])]),t._v(" "),i("div",{staticClass:"content"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.proSummary,expression:"proSummary"}],staticStyle:{width:"100%",height:"130px",border:"none",resize:"none"},attrs:{name:"a",placeholder:"简要介绍该产品或服务"},domProps:{value:t.proSummary},on:{input:function(e){e.target.composing||(t.proSummary=e.target.value)}}})])])]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.proDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),""!==t.proName&&""!==t.proPrice&&""!==t.proSummary&&""!==t.ProPictureImageUrl?i("el-button",{attrs:{type:"primary"},on:{click:t.addProConfirm}},[t._v("确 定")]):i("el-button",{attrs:{type:"primary",disabled:""}},[t._v("确 定")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"el-upload-list__item-status-label"},[e("i",{staticClass:"el-icon-upload-success el-icon-check"})])}]};var c=i("C7Lr")(r,l,!1,function(t){i("+cbH"),i("mOS6"),i("T4h6")},"data-v-714e088e",null);e.default=c.exports},T4h6:function(t,e){},mOS6:function(t,e){}});