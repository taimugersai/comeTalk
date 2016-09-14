<template>
	<div>
		<canvas id="Mycanvas"></canvas>
		<view-box v-ref:view-box>
  		<loading :show="isLoading" text="加载中..."></loading>
    	<router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>
			<tabbar :index.sync="index" icon-class="vux-center">
				<tabbar-item v-link="{path:'/'}" :selected="isHome">
			  		<span class="icon iconfont" slot="icon">&#xe62b;</span>
          <span slot="label">服务</span>
				</tabbar-item>
				<tabbar-item v-link="{path:'/case'}" :selected="isCase">
		  		<span class="icon iconfont" slot="icon">&#xe657;</span>
          <span slot="label">案例</span>
				</tabbar-item>
				<tabbar-item v-link="{path:'/contact'}" :selected="isContact">
			  		<span class="icon iconfont" slot="icon">&#xe61d;</span>
          	<span slot="label">联系我们</span>
				</tabbar-item>
			</tabbar>
		</view-box>
	</div>
</template>

<script>
import Loading from 'vux/dist/components/loading'
import ViewBox from 'vux/dist/components/view-box'
import Tabbar from 'vux/dist/components/tabbar'
import TabbarItem from 'vux/dist/components/tabbar-item'
import store from './vuex/store'

export default {
  components: {
  	Loading,
  	Tabbar,
  	ViewBox,
  	TabbarItem
  },
  store: store,
  vuex: {
    getters: {
      route: (state) => state.route,
      isLoading: (state) => state.isLoading,
      direction: (state) => state.direction
    }
  },
  ready () {
  	var load = document.getElementsByClassName('loader')
  	load[0].remove()
  	var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 40;
		
		var canvas = document.getElementById('Mycanvas');
		canvas.width = WIDTH,
		canvas.height = HEIGHT;
		var context = canvas.getContext('2d');
		context.fillStyle = 'rgba(0,0,0,0.1)';
		var circleArr = [];

		//点：圆心xy坐标，半径，每帧移动xy的距离
		function Circle (x, y, r, moveX, moveY) {
			this.x = x,
			this.y = y,
			this.r = r,
			this.moveX = moveX,
			this.moveY = moveY;
		}
		//生成max和min之间的随机数
		function num (max, _min) {
			var min = arguments[1] || 0;
			return Math.floor(Math.random()*(max-min+1)+min);
		}
		// 绘制原点
		function drawCricle (cxt, x, y, r, moveX, moveY) {
			var circle = new Circle(x, y, r, moveX, moveY)
			cxt.beginPath()
			cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
			cxt.closePath()
			cxt.fill();
			return circle;
		}
		//初始化生成原点
		function init () {
			circleArr = [];
			for (var i = 0; i < POINT; i++) {
				circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(5, 1), num(10, -10)/40, num(10, -10)/40));
			}
			draw();
		}

		//每帧绘制
		function draw () {
			context.clearRect(0,0,canvas.width, canvas.height);
			for (var i = 0; i < POINT; i++) {
				drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
			}
			for (var i = 0; i < POINT; i++) {
				for (var j = 0; j < POINT; j++) {
					if (i + j < POINT) {
						var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
							B = Math.abs(circleArr[i+j].y - circleArr[i].y);
					}
				}
			}
		}
		init();
		setInterval(function () {
			for (var i = 0; i < POINT; i++) {
				var cir = circleArr[i];
				cir.x += cir.moveX;
				cir.y += cir.moveY;
				if (cir.x > WIDTH) cir.x = 0;
				else if (cir.x < 0) cir.x = WIDTH;
				if (cir.y > HEIGHT) cir.y = 0;
				else if (cir.y < 0) cir.y = HEIGHT;
			}
			draw();
		}, 16);
  },
  data () {
    return {
    	index: 0
    }
  },
  methods: {
    
  },
  computed: {
  	isHome () {
      return !this.isCase&&!this.isContact
    },
  	isCase () {
      return /case/.test(this.route.path)
    },
    isContact () {
      return /contact/.test(this.route.path)
    }
  }
}
</script>

<style>
body{
	background: #f3f3f3;
}
#Mycanvas{
	position: absolute;
	top: 0;
	left: 0;
}
#app{
	height: 100%;
}
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: .6s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
