<template>
  <div class="container">
    <swiper :list="list" dots-position="center" auto loop height="140px"></swiper>
    <tab :index.sync="index" :line-width="2">
      <tab-item :selected="active === tab" v-for="tab in tabs" @click="active = tab">{{ tab }}</tab-item>
    </tab>
    <div v-for="content in tablist">
      <div v-show="($index == index) ? true : false" :transition="'vux-pop-' + (index == 0 ? 'out' : 'in')">
        <div style="margin: 10px 0;overflow: hidden;" v-for="item in content">
          <a class="case-show" v-link="{path:'/case-detail/111'}">
            <masker :opacity="0.5">
              <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
              <div slot="content" class="m-title">
                <span>{{  item.title }}</span>
                <br/>
                <span class="m-time">{{  item.profiles }}</span>
              </div>
            </masker>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { http } from '../xhr.js'
import api from '../api/api.json'
import Swiper from 'vux/dist/components/swiper'
import SwiperItem from 'vux/dist/components/swiper-item'
import Tab from 'vux/dist/components/tab'
import TabItem from 'vux/dist/components/tab-item'
import Masker from 'vux/dist/components/masker'

export default {
  components: {
    Swiper,
    SwiperItem,
    Tab,
    TabItem,
    Masker
  },
  ready () {
    let self = this
    http(api.case.method, api.case.url, function(data){
      self.tablist = data.tablist
      self.list = data.list
    })
  },
  data: function () {
    return {
      index: 0,
      active: '移动端',
      tabs: ['移动端', 'PC端'],
      list: [],
      tablist: []
    }
  },
  methods: {
    
  }
}

</script>
<style>
.weui_tabbar{
  position: fixed;
}
.vux-sticky{
  z-index: 101;
}
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}
.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0,0,0,.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
</style>