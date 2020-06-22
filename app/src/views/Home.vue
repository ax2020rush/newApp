<template>
  <div class="home">
    <div class="head">
      <van-icon name="wap-nav" />
      <h3>AX&MUSIC</h3>
      <van-icon name="music" />
    </div>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="我的">内容 1</van-tab>
        <van-tab title="乐库">内容 2</van-tab>
        <van-tab title="发现">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss">
  .home{
    .head{
      background: linear-gradient(44deg,#ff25a0,#ff277a,#ff565a);
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      padding-top: 30px;
      padding-bottom: 140px;
      .van-icon{
        font-size: 22px;
      }
    }
    .content{
      .van-tabs{
        margin-top: -44px;
        .van-tabs__nav{
          background: none;
          .van-tab{
            color: #ffffff;
            font-size: 14px;
          }
        }
        [class*=van-hairline]::after{
          border: none;
        }
      }
    }
  }
</style>
