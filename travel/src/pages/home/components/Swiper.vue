<template>
  <div class="swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true //可以循环轮播
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/2011/54/545a88fff97b91a3a3.water.jpg_256x160_4bb21b58.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1605/68/683895595a535e2090.img.jpg_256x160_8551663a.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
 background: #fff
.swiper
  width :100%
  height :31.25vw
  background :#eee
  .swiper-img
   width :100%
</style>
