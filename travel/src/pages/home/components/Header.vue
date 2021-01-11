<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
// 这里样式中，1 rem = html font-size = 50px;
//0.02 rem = 1px;
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display:flex
  line-height:.86rem
  height: 0.86rem
  background: $bgColor
  color: #fff

  .header-left
    width: 0.64rem
    float:left
    .back-icon
      text-align :center
      font-size:.4rem

  .header-input
    flex:1
    background :#fff
    border-radius :0.1rem
    margin-top :.12rem
    padding-left : .2rem
    height : .64rem
    margin-left :.2rem
    color:#ccc
    line-height :.64rem

  .header-right
    width: 1.24rem
    float: right
    text-align :center
    .arrow-icon
      font-size: .24rem
      margin-left:-0.04rem
</style>
