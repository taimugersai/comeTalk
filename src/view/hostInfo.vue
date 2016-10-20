<template>
 <div class="container">
 <!-- 头部部分 -->
    <div class="top">
       <img :src="header" class="head-picture">
       <div class="na"><span class="sur-name"><b>主播名：</span>{{name}}</b></div>
       <div class="little-box"><img :src="sex" class="sexx"><span>{{age}}</span></div>
    </div>
 <!-- 轮播部分 -->
    <div  class="swiper-p">
      <swiper :list="list" height="300px"></swiper>
    </div>
<!-- 价格部分 -->
    <div class="price-box">
      <div class="price-msg">{{messg}}<strong> <strong> . </strong> </strong>{{grade}}</div>
      <div><span>{{price}}</span>元/小时</div>
    </div>
<!-- 视频插入 -->
    <div class="fre">
      <div class="ve"><span>||</span> 视频</div>
      <iframe frameborder="0" width="90%" src="http://v.qq.com/iframe/player.html?vid=t0021nmggu0&tiny=0&auto=0"></iframe>
    </div>
<!-- 下单 -->
    <div class="order">
      <a href="placeOrder">下单</a>
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
      header:"../../static/images/hoster.jpg",
      name:"鸽呦女孩",
      sex:"./../../static/images/sex-f.png",
      age:"22",
      messg:"声优聊天",
      grade:"音绣",
      price:"35",
      list: [{
        url: './../../static/images/swiper2.jpg',
        img: './../../static/images/swiper2.jpg'
      }, {
        url: './../../static/images/swiper1.jpg',
        img: './../../static/images/swiper1.jpg'
      }, {
        url: './../../static/images/swiper3.jpg',
        img: './../../static/images/swiper3.jpg'
       }, {
        url: './../../static/images/swiper4.jpg',
        img: './../../static/images/swiper4.jpg'
      }]

    }
  },
  methods: {

  }
}
</script>
<style scoped>
@import '~vux/dist/vux.css';
/*头部部分*/
body{
      background: #1f2326;
}
  .container{

    color: white;
    font-family: "微软雅黑";
    padding-bottom: 20px;
  }
  .head-picture{
    width: 60px;
    height: 60px;
    border-radius: 40px;
    float: left;
  }
  .top{
    margin-left: 15px;
    padding-top: 10px;
    position: relative;
    font-size: 10px;
  }
  .sur-name{
    color: #878787;
  }
  .na{
    font-size: 15px;
    position: absolute;
    text-align:center;
    left:80px;
    top:15px;
  }
  .little-box{
    width: 50px;
    height:20px;
    background: #f4703f;
    border-radius: 15px;
    margin-top: 15px;
    position: absolute;
     text-align:center;
    left:80px;
    top:30px;
  }
  .little-box span{
    margin-left: 10px;
  }
  .sexx{
    width: 10px;
    height: 10px;
    line-height:20px;
    margin-top:5px;
    vertical-align:-1px;

  }
/*轮播部分*/
.swiper-p{
  width:95%;
  margin:0 auto;
  height: 300px;
  margin-top: 70px;
}

/*价格部分*/
.price-box{
  height: 60px;
  margin:0 auto;
  border-radius: 10px;
  text-align: center;
}
.price-msg{
  margin-top:10px;
}
.price-box span{
  font-size: 30px;
  color: #f4703f;
}
/*视频*/
.ve{
  text-align: left;
  margin-left: 20px;
  font-size:20p;
}
.ve span{
  font-size: 25px;
  color: #495157;
}
.fre{
  margin-top: 10px;
  text-align:center;
  margin-bottom:30px;
}
/*下单*/
.order{
  width: 100vw;
  height: 50px;
  background: #f4703f;
  margin:0 auto;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  position: fixed;
  left: 0px;
  bottom: 0px;

}
a{
  color: white;
  text-decoration: none;
}


</style>

