<template>

  <div class="index" :class="toRight">
    <img :src="bg" alt="">
    <div @click="swich" :class="active" class="ico">
      <span ></span>
      <span></span>
      <span></span>
    </div>
    <div class="text">
      <div>
        <h2>MY BOKE</h2>
        <h2>LTX</h2>
      </div>
    </div>

  </div>
</template>

<script>
import bg1 from 'assets/img/bg2.jpg'
export default {
  name: 'index',
  data () {
    return {
      bg: bg1,
      active: false,
      toRight: false
    }
  },
  methods: {
    swich () {
      if (!this.active) {
        this.active = 'active'
      } else if (this.active === 'active') {
        this.active = 'unActive'
      } else if (this.active === 'unActive') {
        this.active = 'active'
      }
      if (!this.toRight) {
        this.toRight = 'toRight'
      } else if (this.toRight === 'toRight') {
        this.toRight = 'unToRight'
      } else if (this.toRight === 'unToRight') {
        this.toRight = 'toRight'
      }
    }
  }
}
</script>
<style lang="scss">
.toRight{
  left: 60%;
  top: 10%;
  border-radius: 20PX;
  overflow: hidden;
  animation: toRight .5s;
}
.unToRight{
  border-radius: 0PX;
  overflow: hidden;
  animation: UnToRight .5s;
}
@keyframes UnToRight {
  0%{
    left: 60%;
    top: 10%;
    border-radius: 20PX;

  }
  99%{
    border-radius: 0PX;
  }
  100%{
    left: 0%;
    top: 0%;

  }
}
@keyframes toRight {
  0%{
    left: 0%;
    top: 0%;
  }
  100%{
    left: 60%;
    top: 10%;
  }
}
.index{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .active{
    span{

      &:nth-child(1){
        transform: rotate(-44deg);
        top:11PX;
      }
      &:nth-child(2){
        transform: rotate(44deg);
      }
      &:nth-child(3){
        display: none;
      }
      &:nth-child(1){
        animation: move .5s;
      }
      &:nth-child(2){
        animation: move2 .5s;
      }

    }
    @keyframes move {
      0%{
        left:0PX ;
        top: 0PX;
        transform: rotate(0deg);
      }
      50%{

        left: 20PX;
      }
      100%{
        left: 0PX;
        top: 11PX;
        transform: rotate(-44deg);

      }
    }
    @keyframes move2 {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(44deg);
      }

    }

  }
  .unActive{
    span{
      &:nth-child(1){
        animation: unMove .5s;
      }
      &:nth-child(2){
        animation: unMove2 .5s;
      }
      &:nth-child(3){
        animation: unMove2 .5s;
      }
      @keyframes unMove {
        0%{
          transform: rotate(-44deg);
        }
        100%{
          transform: rotate(0deg);
        }

      }
      @keyframes unMove2 {
        0%{
          transform: rotate(44deg);
        }
        100%{
          transform: rotate(0deg);
        }

      }
      @keyframes unMove2 {
        0%{
          opacity: 0;
        }
        100%{
          opacity: 1;
        }

      }
    }
  }
  .ico{
    font-size: 50px;
    position: absolute;
    left: 40px;
    top: 30px;
    z-index: 9999;
    writing-mode: vertical-rl;
    display: flex;

    span{
      width: 60px;
      height: 2PX;
      background: black;
      margin: 10px 0;
      display: inline-block;

      position: relative;

    }

  }
  .text{
    position: absolute;
    z-index: 9;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    h2{
      font-weight: 400;
      margin: 60px 0;
    }
  }
  >img{
    height: 100%;
    position: absolute;
  }
}

</style>
