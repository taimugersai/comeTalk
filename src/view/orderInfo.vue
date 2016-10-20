<template>
  <div>
    <div class="orderinfo_body" v-for="todo in todos">
      <div class="orderinfomsg" >
        <div class="orderinfomsg_img">
          <img :src="todo.headImg">
        </div>
        <div class="orderinfomsg_msg">
          <p class="orderinfomsg_msg_name">{{todo.name}}</p>
          <img class="orderinfomsg_msg_sexageimg" :src="todo.sexAge" alt="">
          <div class="orderinfomsg_msg_rank">
            <img :src="todo.rankIcon" alt="">
            <p>{{todo.rank}}</p>
          </div>
        </div>
        <div class="orderinfomsg_icon"> 
          <p>></p>
        </div>
      </div>
      <div class="orderInfoDetail">
        <p class="orderInfoDetail_p">订单详情</p>
        <div class="orderinfo_paymsg_type">
          <p>{{todo.type}}<span>{{todo.typeMsg}}</span></p>
        </div>
        <div class="orderinfo_paymsg_time">
          <p>{{todo.time}}<span>{{todo.timeMsg}}</span></p>
        </div>
        <div class="orderinfo_paymsg_pay">
          <p>{{todo.pay}}<span>{{todo.payMsg}}元</span></p>
        </div>
        <div class="orderinfo_paymsg_Num">
           <p>数量:<span>x{{todo.payNum}}</span></p>
        </div>
        <div class="orderinfo_paymsg_total">
          <p>{{todo.total}}<span>{{todo.payMsg*todo.payNum}}</span></p>
        </div>
        <p class="orderinfo_paymsg_peyment">{{todo.Payment}}</p>
      </div>
    </div>  
  </div>
</template>
<script>
import { http } from '../xhr.js'
export default {
  components: {

  },
  ready () {
    
  },
  data: function () {
    return {
      todos:[
          {
             headImg:"./static/images/head1.jpg",
             name:"范冰冰女王",
             sexAge:"./static/images/sexage.png",
             rankIcon:"./static/images/star.png",
             rank:"5.0",
             type:"品类:",
             typeMsg:"声优聊天",
             time:"时间:",
             timeMsg:"10月18日 15:15 1小时",
             pay:"费用:",
             payMsg:"35",
             payNum:"1",
             total:"合计:",
             totalMsg:"31元",
             Payment:"8分钟后支付结束"
          }
      ]
    }
  },
  methods: {

  }
}
</script>
<style>
@import '~vux/dist/vux.css';
.orderinfo_body{
  width: 6.4rem;
  height: 100vh;
  background-color: #1f2326;
  color: #fff; 
}
.orderinfomsg{
  width: 5.86rem;
  height: 2.02rem;
  padding: 0 0.22rem 0 0.32rem;
  font-size:0.2rem; 
  border-bottom: 1px solid #313334;
  margin-bottom: 0.2rem;
  background-color: #1f2326;
}
.orderinfomsg_img{
  width: 1.2rem;
  height: 2.02rem;
  float: left;
}
.orderinfomsg_img img{
   width: 1.2rem;
   height: 1.2rem;
   border-radius:7px; 
   margin-top: 0.46rem;
}
.orderinfomsg_msg_name{
   margin-top: 0.46rem;
}
/*.orderinfomsg_msg img{
  width: 0.4rem;
  height: 0.2rem;
  margin-top: 8px;
  border-radius:5px;
}*/
.orderinfomsg_msg_sexageimg{
  width: 0.4rem;
  height: 0.2rem;
  margin-top: 14px;
  border-radius:5px;
}
.orderinfomsg_msg{
  width: 1.55rem;
  height: 2.02rem;
  font-size:0.2rem;
  margin-left: 0.2rem; 
  float: left;
}
.orderinfomsg_msg_rank img{
  width: 0.35rem;
  height: 0.35rem;
  margin-top: 3px;
  float: left;
}
.orderinfomsg_msg_rank p{
  font-size: 0.22rem;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
}
.orderinfomsg_icon{
  width: 2.9rem;
  height: 2.02rem;
  font-size: 0.38rem;
  float: left;
}
.orderinfomsg_icon p{
  float: right;
  line-height: 2.02rem;
}



.orderInfoDetail{
  width: 5.86rem;
  height: auto;
  margin:0 0.27rem;
  border:1px solid #313334; 
  border-radius: 5px;
  background-color: #1f2326; 
}
.orderInfoDetail_p{
  width: 100%;
  height: 0.76rem;
  line-height: 0.76rem;
  font-size: 0.24rem;
  margin-left: 5px;
  border-bottom:1px solid #313334;

}
.orderinfo_paymsg_type{
  width: 5.42rem;
  height: 0.76rem;
  padding: 0 0.22rem 0 0.22rem;
  font-size: 0.24rem;
  line-height: 0.76rem;
  border-bottom: 1px solid #313334;
}
.orderinfo_paymsg_time{
  width: 5.42rem;
  height: 0.76rem;
  padding: 0 0.22rem 0 0.22rem;
  font-size: 0.24rem;
  line-height: 0.76rem;
  border-bottom: 1px solid #313334;
}
.orderinfo_paymsg_pay{
  width: 5.42rem;
  height: 0.76rem;
  padding: 0 0.22rem 0 0.22rem;
  font-size: 0.24rem;
  line-height: 0.76rem;
  background-color: #1f2326;
  border-bottom: 1px solid #313334;
}
.orderinfo_paymsg_Num{
  width: 5.42rem;
  height: 0.76rem;
  padding: 0 0.22rem 0 0.22rem;
  font-size: 0.24rem;
  line-height: 0.76rem;
  background-color: #1f2326;
  border-bottom: 1px solid #313334;
}
.orderinfo_paymsg_total{
  width: 5.42rem;
  height: 0.76rem;
  padding: 0 0.22rem 0 0.22rem;
  font-size: 0.24rem;
  line-height: 0.76rem;
  border-bottom: 1px solid #313334;
}
.orderinfo_paymsg_peyment{
  position: absolute;
  width: 5.86rem;
  height: 0.6rem;
  bottom: 0;
  font-size: 0.24rem;
  border-radius: 25px;
  line-height: 0.6rem;
  background-color: rgba(244,112,63,0.7);
  /*background-color: rgba(31,35,38,0.7);  */   
  text-align: center;
}
.orderinfo_paymsg_type span{
  float:right;
}
.orderinfo_paymsg_time span{
  float:right;
}
.orderinfo_paymsg_pay span{
  float:right;
}
.orderinfo_paymsg_Num span{
  float:right;
}
.orderinfo_paymsg_total span{
  float:right;
}
.orderinfo_paymsg_total p{
  float:right;
}

</style>