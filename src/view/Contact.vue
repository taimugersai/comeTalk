<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
  export default {
    ready () {
      let center = new qq.maps.LatLng(31.488860,120.374500);
      let map = new qq.maps.Map(document.getElementById('map'),{
          center: center,
          zoom: 16
      });
      let infoWin = new qq.maps.InfoWindow({
          map: map
      });
      infoWin.open();
      //tips  自定义内容
      infoWin.setContent('<div style="width:300px;padding-top:10px;">'+
          '<img style="float:left;width:100px;" src="./static/images/logo.jpg"> '+
          '<p>&nbsp;&nbsp;&nbsp;&nbsp;夜行侠网络科技</p>'+
          '<p style="font-size:14px;">&nbsp;&nbsp;&nbsp;&nbsp;无锡国家软件园金牛座</p></div>');
      infoWin.setPosition(center);
    },
    head: {
      title: {
        inner: '联系我们',
        separator: '-',
        complement: ''
      }
    }
  }
</script>
<style scoped>
#map{
  width: 100%;
  height: 300px;
}
</style>
