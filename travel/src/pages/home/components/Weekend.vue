<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-swiper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1910/ad/ad2e74a03cc734a4a3.img.png_200x200_4b295005.png",
          title:
            "大连海洋公园海洋馆大连海洋公园海洋馆大连海洋公园海洋馆大连海洋公园海洋馆",
          desc:
            " 浪漫大连首站，浪漫的海洋主题乐园大连海洋公园海洋馆大连海洋公园海洋馆"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1910/ad/ad2e74a03cc734a4a3.img.png_200x200_4b295005.png",
          title:
            "大连海洋公园海洋馆大连海洋公园海洋馆大连海洋公园海洋馆大连海洋公园海洋馆",
          desc:
            " 浪漫大连首站，浪漫的海洋主题乐园大连海洋公园海洋馆大连海洋公园海洋馆"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1910/ad/ad2e74a03cc734a4a3.img.png_200x200_4b295005.png",
          title:
            "大连海洋公园海洋馆大连海洋公园海洋馆大连海洋公园海洋馆大连海洋公园海洋馆",
          desc:
            " 浪漫大连首站，浪漫的海洋主题乐园大连海洋公园海洋馆大连海洋公园海洋馆"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.title
 margin-top:.2rem
 line-height:.8rem
 background:#eee
 text-indent:.2rem

.item-img-swiper
 height:0
 overflow:hidden
 padding-bottom:33.9%
 .item-img
  width:100%
.item-info
 padding:.1rem
 .item-title
   line-height :.54rem
   font-size :.32rem
   ellipsis()
 .item-desc
   line-height :.4rem
   color:#ccc
   ellipsis()
</style>
