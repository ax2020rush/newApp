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
                <swiper :options="swiperOption" >
                   <swiper-slide v-for="(val,key) in musicList" :key="key" :style="val.back">
                     <h3>{{val.name}}</h3>
                     <div class="text">
                       <p>{{val.title}}</p>
                       <p>{{val.text}}</p>
                     </div>
                     <div class="before" :style="val.back"></div>
                   </swiper-slide>

                </swiper>
              </van-sticky>
            </li>
            <li>
              <div class="line"></div>
              <van-sticky :offset-top="116">
                <div class="title">
                  <h2>每日推荐</h2>
                  <div class="lx2">
                    更多
                  </div>
                </div>
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
      },
      musicList: [
        { name: '轻音乐', back: 'background:linear-gradient(40deg,#4b67f6,#1ab8ee,#22dfd4)', title: '我的喜好', text: '2994万人听过' },
        { name: '爵士音乐', back: 'background:linear-gradient(40deg,#813AD1,#B436A4,#ef2677)', title: '官方推荐', text: '2294万人听过' },
        { name: '流行音乐', back: 'background:linear-gradient(40deg,#b52a91,#ea3565,#fd993b)', title: '我的喜好', text: '2994万人听过' },
        { name: '摇滚音乐', back: 'background:linear-gradient(40deg,#4c7ce6,#9e63bd,#de6092)', title: '今日热门', text: '2494万人听过' },
        { name: '钢琴乐', back: 'background:linear-gradient(40deg,#5fc0eb,#73a2f2,#eaadc5)', title: '好友推荐', text: '2994万人听过' },
        { name: '民谣', back: 'background:linear-gradient(40deg,#2891d8,#43dcc0,#56f59a)', title: '好友推荐', text: '294万人听过' },
        { name: '蓝调音乐', back: 'background:linear-gradient(40deg,#ab3bcb,#4b9fe6,#37ded2)', title: '我的喜好', text: '299万人听过' },
        { name: '电子音乐', back: 'background:linear-gradient(40deg,#65109f,#c35398,#ecb7a0)', title: '官方推荐', text: '2094万人听过' },
        { name: '古风音乐', back: 'background:linear-gradient(40deg,#ff8043,#f0dd64,#c1f177)', title: '我的喜好', text: '94万人听过' }
      ]
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
          .line{
            width: 96%;
            height: 6px;
            background: linear-gradient( to right,#f32ec9,#e62188,#ea562d);
            margin: 40px 0;
            margin-left: 4%;
          }
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
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: 500;

              .van-icon {
                transform: rotate(180deg);
              }
            }
            .lx2{
              font-size: 14px;
              color: #484848;
              font-weight: 500;
            }
          }

          .swiper-container {
            width: 100%;
            margin-top: 30px;
          }

          .swiper-wrapper {
            padding-top: 20px;
            padding-left: 30px;
            padding-bottom: 30px;
          }

          .swiper-slide {
            height: 250px;
            border-radius: 8px;
            box-shadow: 4px 0px 10px rgba(35, 77, 111, 0.2);
            h3{
              color: #ffffff;
              font-size: 34px;
              margin-top: 30px;
            }
            .text{
              position: absolute;
              bottom: 0;
              p{
                text-align: left;
                margin-left: 40px;
                font-size: 14px;
                color: #fdfdfd;
                text-shadow: 0px 0px 3px #270715;
                &:last-child{
                  margin-bottom: 20px;
                }
              }
            }
            .before{
              content: '';
              position: absolute;
              width: 83%;
              height: 100%;
              z-index: -1;
              bottom: -10px;
              left: 0;
              filter: blur(10px);
              right: 0;
              margin: auto;
            }
          }
        }

      }
    }
  }
</style>
