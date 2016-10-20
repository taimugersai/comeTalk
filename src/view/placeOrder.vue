<template>
  <div class="place">
    <div class="head">
        <img class="img1" :src=" headSrc ">
        <div class="petName">{{ name }}</div>
    </div>
    <div class="line1" style="margin-top:10px"></div>
    <div>
      <!-- 选择品类 -->
      <div class="back">
        <popup-picker :title="title1" :data="list1" :value.sync="value1" @on-show="onShow" @on-hide="onHide"></popup-picker>
      </div>
      <div class="line"></div>
      <!-- 选择时间 -->
      <div class="back">
        <datetime :title="title2" :value.sync="value2" placeholder="选择时间" :min-year=2016 format="YYYY-MM-DD HH:mm" confirm-text="确定" cancel-text="取消"></datetime>
      </div>
      <div class="line"></div>
      <!-- 选择数量 -->
      <div class="back">
        <popup-picker :title="title3" placeholder="选择数量" :data="list3" :value.sync="value3" @on-show="onShow" @on-hide="onHide"></popup-picker>
      </div>
      <!-- <div class="line"></div> -->
    </div>
    <!-- 费用结算 -->
    <div class="line1" style="margin-top:10px"></div>
    <ul class="orderType">
      <li>
        <p>费用</p>
        <div class="pop">
          <span class="price">{{ price }}元</span>
          <span class="num">*{{value3}}</span>
        </div>
      </li>
    </ul>
    <div class="line"></div>
    <ul class="orderType">
      <li>
        <p>合计</p>
        <div class="pop">
          <span>{{ price*value3}}元</span>
        </div>
      </li>
    </ul>
    <!-- <div class="line"></div> -->
    <a class="btn" v-link="{path:'/orderInfo'}">{{ msg }}</a>
  </div>
</template>
<script type="text/javascript">
import Datetime from 'vux/dist/components/datetime'
import Group from 'vux/dist/components/datetime'
import PopupPicker from 'vux/dist/components/popup-picker'

export default {
   components: {
    Datetime,
    Group,
    PopupPicker
  },
  ready () { 
    // let self = this
    // http(api.contact.method, api.contact.url, function(data){
    //   self.contactlist = data.contactlist
    // })
  },
 data: function () {
    return {
      index: 0,
      headSrc:"../../static/images/head.jpg",
      name:"蜜柚",
      title1: '品类',
      title2: '时间',
      title3: '小时',
      list1: [['聊天1','聊天2','聊天3','聊天4']],
      list3: [['1', '2', '3', '4',, '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']],
      value1: ['聊天1'],
      value2: '', 
      value3: ['1'],
      price:'35',
      msg:'提交订单',
    
    }
  },  
    methods: {
      // change (value) {
      //   console.log('change', value)
      // },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      // toLink () {
      //   this.msg = '提交成功'
      // }
    }
  }
</script>
<style scoped>
.place{
  font-family: "微软雅黑";
  font-size: 14px;
  width: 100%;
  height:100vh;
  color:#fff;
  background-color:#1f2326; 
  margin-bottom:0;
}
.line1{
  width: 100%;
  height:5px;
  background-color: #313334;
  /*margin: 0 auto;*/
}
.line{
  width: 97%;
  background-color: #313334;
  height: 2px;
  margin: 0 auto;
}
.clear{
  clear:both;
}
.head{ 
  text-align: center;
  padding: 30px 0 8px 0;
}
.img1{
  width: 110px;
  height: 110px;
  border-radius: 6px;
}
.petName{ 
  font-size: 18px;
}
.back:active{
  background-color: #1c1f22!important;
}
.orderType{
  height:45px;
}
.orderType li{
  width: 100%;
  height:40px;
  line-height: 45px;
  list-style: none;
}
.orderType li p{
  float: left;
  display: inline-block;
  margin-left:12px;
}
.pop{
  float: right;
  margin-right: 12px;
}
.btn{
  width: 100%;
  height: 50px;
  display: block;
  position:fixed;
  bottom:0;
  line-height: 50px;
  font-size: 20px;
  background-color: #d5643a;
  color:#fff;
  text-align:center;
}
</style>
<!-- 以下css样式注释代码要求置于index.vue页面 -->
<!--  .weui_cell_ft.with_arrow.vux-datetime-value{
  color:#d5643a;
}
.vux-popup-picker-value{
  color:#d5643a;
}
.weui_cell_bd>p{
  color:#fff!important;
  text-align:left;
}
.weui_cell.vux-tap-active:active{
  background-color: #1c1f22;
} -->