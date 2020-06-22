<template>
  <div class="home">
    <div class="head">
      <van-icon name="wap-nav"/>
      <h3>AX&MUSIC</h3>
      <van-icon name="music"/>
    </div>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="我的">内容 1</van-tab>
        <van-tab title="乐库">
          <ul class="card">
            <li>
              <van-sticky :offset-top="116">
              <div class="title">
                <h2>音乐风格</h2>
                <div class="lx">
                  <van-icon name="play"/>
                  类型
                </div>
              </div>
                <swiper :options="swiperOption">
                  <swiper-slide>I'm Slide 1</swiper-slide>
                  <swiper-slide>I'm Slide 2</swiper-slide>
                  <swiper-slide>I'm Slide 3</swiper-slide>
                </swiper>
                </van-sticky>
            </li>
          </ul>
        </van-tab>
        <van-tab title="发现">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      active: 1,
      swiperOption: {
        // 参数选项,显示小点
        // 循环

        // 每张播放时长3秒，自动播放
        autoplay: 2000,
        // 滑动速度
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 20
        // delay:1000
      }
    }
  },
  components: {}
}
</script>
<style lang="scss">
  .home {
    .head {
      background: linear-gradient(44deg, #ff25a0, #ff277a, #ff565a);
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      padding-top: 30px;
      padding-bottom: 140px;

      .van-icon {
        font-size: 32px;
      }
    }

    .content {
      .van-tabs {
        margin-top: -44px;

        .van-tabs__nav {
          background: none;

          .van-tab {
            color: #ffffff;
            font-size: 14px;
          }

          .van-tabs__line {
            background: none;
            border-radius: 0;
            height: 30px;
            width: 30px !important;
          }

          .van-tabs__line::before {
            content: '';
            width: 100%;
            height: 100%;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            top: 58px;
            bottom: 0;
            margin: auto;
            transform: rotate(45deg);
          }
        }

        [class*=van-hairline]::after {
          border: none;
        }

        .van-tabs__content {
          background: none;
          margin-top: 2px;
        }
      }

      .card {
        li {
          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5%;
            h2 {
              font-size: 40px;
            }
            .lx {
              color: #ec2195;
              font-size: 13px;
              display: flex;
              justify-content: center;
              align-items: center;
              .van-icon {
                transform: rotate(180deg);
              }
            }
          }
          .swiper-container{
            width: 100%;
            margin-top: 30px;
          }
          .swiper-slide{
            background: linear-gradient(40deg,#4b67f6,#1ab8ee,#22dfd4);
            height: 300px;
            border-radius: 6%;
            box-shadow: 0px 6px 10px rgba(18, 108, 109, 0.76);
          }
        }

      }
    }
  }
</style>
