<template>
  <div id="app">
    <transition :name="this.$store.state.AnimationType">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  provide () { // 在祖先组件中通过 provide 提供变量
    return {
      reload: this.reload //  声明一个变量
    }
  },
  data () {
    return {
      isRouterAlive: true // 控制 router-view 是否显示达到刷新效果
    }
  },
  methods: {
    // provide中声明的变量
    reload () {
      // 通过 this.isRouterAlive 控制 router-view 达到刷新效果
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  watch: {
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.$store.dispatch('setTransition', 'turn-on')
      } else {
        this.$store.dispatch('setTransition', 'turn-off')
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Noto Sans SC";
  font-weight: 100;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
}
.turn-on-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.turn-on-leave-to {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
body{
  overflow-x: hidden;

}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: all 500ms;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;right: 0;
}

.turn-off-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.turn-off-leave-to {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}

.turn-off-enter-active,
.turn-off-leave-active {
  transition: all 500ms;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;right: 0;
}

.turn-off-leave-active {
  z-index: 9999;
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 500PX;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;

}
@media (max-width: 500px) {
  #app{
    width: 100%;
  }
}
</style>
