<template>
  <div class="body">
    <!-- 顶部分类 -->
     <scroller lock-y :scrollbar-x=false :bounce=false width="auto">
      <div class="box1">
        <div class="box1-item" v-for="titleItem in title"  @click="active = titleItem, index=$index, change()" :class="(active == titleItem) ? 'selected' : '' ">{{ titleItem }}</div>
      </div>
    </scroller>
    <div class="empty"></div>
    <!-- 列表信息 -->
    <div id = "scroller">
      <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2" :prevent-default="true" v-ref:scroller :height="scrollerHeight" @pullup:loading="load2" >
      <div>
        <div class="contain" v-for="vo in hosts">
          <a href="hostInfo" :style="{backgroundImage:'url('+vo.imgUrl+')',backgroundSize:'100% 100%'}"></a>
          <div class="name">&nbsp;&nbsp;&nbsp;&nbsp;{{vo.name}}</div>
          <div class="level">{{vo.level}}</div>
          <div class="price">{{vo.price}}</div>
        </div>
      </div>
      </scroller>
 </div>
  </div>
</template>
<script>
import { http } from '../xhr.js'
import api from '../api/api.json'
import Scroller  from 'vux/dist/components/scroller'
import Divider from 'vux/dist/components/divider'
import Spinner from 'vux/dist/components/spinner'


export default {
  components: {
    Scroller,
    Divider,
    Spinner,
  },
  ready () {
    this.$nextTick(() => {
      this.$refs.scroller.reset()
    })  

    let self = this
    http(api.index.method, api.index.url, function(data){
      console.log(data)
      self.title = data.title;
      self.hosts = data.hosts;
    })
   
    var cc = document.documentElement.clientHeight-45+"px"
    this.scrollerHeight=cc;
  },
  data: function () {
    return {
      active:"dota",
      scrollerHeight:"",
      title:[],
      hosts:[],
      newhost:[],
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...',
      }
    }
  },
  methods: {
    load2 (uuid) {
      let self = this
      var newhost =[]
      http(api.index.method, api.index.url, function(data){
        self.title = data.title;
        newhost = data.hosts;
    })
      setTimeout(() => {
        if (this.hosts.length <72) {
          this.hosts=this.hosts.concat(newhost);
          setTimeout(() => {
            this.$broadcast('pullup:reset', uuid)
          }, 10)
        } else {
          this.$broadcast('pullup:done', uuid)
        }
      }, 1000)
    },
   
    change:function(){
      let self = this
      http(api.index.method, api.index.url, function(data){
         self.title = data.title;
         self.hosts = data.newhosts;
         self.$nextTick(() => {
            console.log(111);
            self.$refs.scroller.reset({top:0})
          })
       })
    }  
  }
}
</script>
<style>
@import '~vux/dist/vux.css';

.body{
  background-color:#1f2326;
}
.empty{
  height:10px;
  width:100vw
}

/*顶部分类*/
.box1 {
  height: 45px;
  position: relative;
  left:10px;
  width: 900px;
  overflow:hidden;
  color:white;
}
.box1-item {
  margin-top:10px;
  width: 100px;
  height: 70%;
  display:inline-block;
  margin-left: 8px;
  float: left;
  text-align: center;
  vertical-align:center;
  line-height: 32px;
  border:1px solid white;
  border-radius:7px;
  color:white;
  font-family:"微软雅黑";
}
.box1-item:first-child {
  margin-left: 0;
}
.selected{
  background:#f4703f;
}



/*列表信息*/
.contain{
  display:inline-block;
  width:47%;
  height:210px;
  floar:left;
  margin-left:7px;
  overflow:hidden;
  font-family:"微软雅黑";
  border-radius:4px;
  box-shadow: 4px 4px 4px black;
  margin-top:20px;
}
.contain a{
  display:inline-block;
  width:88%;
  height:150px;
  margin:10px 10px;
  border-radius:7px;
}
.contain .name{
  width:89%;
  height:25px;
  position:relative;
  left:8px;
  bottom:50px;
  font-size:14px;
  color:white;
  background:rgba(45,45,44,.7);
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height:25px;
  overflow:hidden;
}
.contain .level{
  display:inline-block;
  width:30%;
  height:10%;
  position:relative;
  top:-30px;
  left:3px;
  margin-left:10px;
  border-radius:7px;
  background:#f4703f;
  color:white;
  vertical-align:center;
  font-size:13px;
  text-align:center;
  font-weight:bloder;
}
.contain .price{
  display:inline-block;
  float:right;
  width:50%;
  height:10%;
  position:relative;
  top:-25px;
  margin-right:8px;
  color:white;
  font-size:14px;
  line-height:20px;
  text-align:center;
}
/*下拉加载*/
.xs-plugin-pullup-container{
  color:white!important;
  height:40px!important;
}
.xs-plugin-pullup-undefined{
  color:white!important;
  height:40px!important;
}
</style>