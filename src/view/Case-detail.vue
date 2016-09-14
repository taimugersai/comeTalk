<template>
  <div class="container">
    <h1 @click="add">H5案例</h1>
    <!-- {{$route.params.caseId}} -->
    <div style="width:100%;overflow-x:hidden">
      <div v-for="item in items" :transition="'img-' + (($index%2) == 0 ? 'out' : 'in')" class="img-box">
        <div style="width:96%;margin: 0 auto">
          <img :src="'../static/images/loading.gif'" alt="{{ item.title }}" v-lazyload="item.img">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { http } from '../xhr.js'
import api from '../api/api.json'
import Flexbox from 'vux/dist/components/flexbox'
import FlexboxItem from 'vux/dist/components/flexbox-item'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  replace: true,
  ready() {
    let self = this
    let i = 0, timer;
    http(api.caseDetail.method, api.caseDetail.url, function(data){
      self.imgs = data.imgs
      timer = setInterval(function(){
        self.items.push(self.imgs[i])
        i++
        (i >= self.imgs.length) ? clearInterval(timer) : i=i;
      },200)
    })
  },
  data(){
  	return{
      items: [],
      imgs: []
  	}
  },
  methods: {
    add () {
      let self = this
      let i = 0, timer;
      http(api.caseDetail.method, api.caseDetail.url, function(data){
      self.imgs = data.imgs
      timer = setInterval(function(){
        self.items.push(self.imgs[i])
        i++
        (i >= self.imgs.length) ? clearInterval(timer) : i=i;
      },200)
    })
    }
  },
  computed: {

  }
}
</script>
<style scoped>
h1{
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #698b8d;
  text-shadow: 5px 5px 5px rgba(0,0,0,0.16);
}
.img-box{
  width: calc(50% - 12px);
  background: #fff;
  float: left;
  margin: 0 5px 15px 5px;
  padding: 6px 0;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
}
.img-box img{
  width: 100%;
  height: 200px;
  display: block;
}
.img-box p{
  font-family: "Microsoft YaHei";
  text-align: center;
  color: #698b8d;
  font-size: 16px;
  line-height: 40px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.img-out-transition,
.img-in-transition {
  animation-duration: .6s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.img-in-enter {
  animation-name: fadeIn;
}
.img-out-enter {
  animation-name: fadeOut;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeOut {
  from {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>