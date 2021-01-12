<template>
  <div class="header">
    城市选择
    <!-- 返回箭头使用css实现 -->
    <router-link to="/">
      <div class="bc_pos"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
 position:relative
 height:$headerHeight
 line-height :$headerHeight
 overflow :hidden
 text-align :center
 color:#fff
 background :$bgColor
 font-size :.32rem
 .bc_pos
  position: absolute;
  left: 15px;
  top: 15px;
  width:14px;
  height: 14px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(135deg)
</style>
