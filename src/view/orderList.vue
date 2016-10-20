<template>
  <div>
     <!-- <swiper :list="list" dots-position="center" auto loop height="200px"></swiper> -->
      <div class="orderlist_body" >
       <div class="orderlist" v-for="todo in todos">
         <a href="orderInfo">
         <p class="paystate_top">支付状态：{{todo.payStateTop}}</p>
         <div class="ordermsg">
           <div class="ordermsg_left">
             <img :src="todo.headImg" alt="">
           </div>
           <div class="ordermsg_right">
             <p>{{todo.payTime}}</p>
             <img :src="todo.imgIcon" alt="">
           </div>
         </div>
         <p class="paystate_bottom">{{todo.payBtateBottom}}<span>{{todo.payMoney}}元</span></p>
         </a>
       </div>
      </div> 
  </div>
</template>
<script>
import { http } from '../xhr.js'
import Swiper from 'vux/dist/components/swiper'

export default {
  components: {
    Swiper
  },
  ready () {
    
  },
  data: function () {
    return {
      todos:[
          {
             payStateTop:"待支付",
             headImg:"./static/images/head1.jpg",
             payTime:"10月18日 15:15 1小时",
             imgIcon:"./static/images/icon.png",
             payBtateBottom:"需支付：",
             payMoney:"31"
          },
          {
             payStateTop:"待支付",
             headImg:"./static/images/head2.jpg",
             payTime:"10月18日 15:15 1小时",
             imgIcon:"./static/images/icon.png",
             payBtateBottom:"需支付：",
             payMoney:"31"
          },
          {
             payStateTop:"待支付",
             headImg:"./static/images/head3.jpg",
             payTime:"10月18日 15:15 1小时",
             imgIcon:"./static/images/icon.png",
             payBtateBottom:"需支付：",
             payMoney:"31"
          },
          
      ]
     
     
    }
  },
  methods: {
    // goTodOrderInfo:function(){
    //   var that = this 
    //   that.$route.router({path:'/orderInfo'})
    // }
  }
}
</script>
<style>
@import '~vux/dist/vux.css';
.orderlist_body{
  width: 100%;
  height: 100vh;
  border:1px solid #212123;
  background-color: #212123;
}
.orderlist{
  width: 5.66rem;
  height: auto;
  margin:0.1rem 0.15rem;
  padding: 0 0.22rem;
  border:1px solid #313334; 
  border-radius: 5px;
  background-color: #212123;
}
.paystate_top{
  width: 5.66rem;
  height: 0.52rem;
  font-size: 0.2rem;
  color: #fff;
  margin-left:1px; 
  line-height: 0.52rem;
  border-bottom: 1px solid #313334;
}
.ordermsg{
  width: 5.66rem;
  height: 1.09rem;
  color: #fff;
  border-bottom: 1px solid #313334;
}
.ordermsg_left{
  width: 0.81rem;
  height: 1.09rem;
  float: left;
}
.ordermsg_left img{
  width: 0.81rem;
  height: 0.81rem;
  margin-top: 0.15rem;
  display: block;
  border-radius:5px; 
}
.ordermsg_right{
  width:4.85rem;
  height: 1.09rem;
  float: left;
  font-size: 0.24rem;
}
.ordermsg_right p{
  width: 3.66rem;
  height: auto;
  margin-left:12px;
  line-height: 1.09rem; 
  float: left;
}
.ordermsg_right img{
  width: 0.22rem;
  height: 0.22rem;
  margin-top: 0.435rem;
  float: right;
  
}
.paystate_bottom{
  width: 5.66rem;
  height: 0.52rem;
  font-size: 0.2rem;
  line-height: 0.52rem;
  color: #fff;
}
.paystate_bottom span{
  color: #fff;
}
</style>