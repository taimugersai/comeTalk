<template>
  <div>
    
  </div>
</template>
<script>
import { http } from '../xhr.js'
import api from '../api/api.json'
import Swiper from 'vux/dist/components/swiper'

export default {
  components: {
    Swiper
  },
  ready () {
    
  },
  data: function () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
@import '../assets/css/iconfont.css';
@import '~vux/dist/vux.css';
.vux-slider>.vux-swiper>.vux-swiper-item>a>.vux-swiper-desc{
  height: auto
}
.vux-slider .vux-indicator-right>a>.vux-icon-dot.active, .vux-slider>.vux-indicator>a>.vux-icon-dot.active{
  background-color: #fff
}
.iconfont{
  color: #375b96;
}
.weui_bar_item_on .iconfont{
  color: #09bb07
}
</style>