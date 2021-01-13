<template>
  <div class="search">
    <input
      class="search-input"
      v-model="keyword"
      type="text"
      placeholder="输入城市名或拼音"
    />
    <!-- 这里的v-show就是为了当搜索框内没有内容的时候，就直接不显示这一块，
    这是一个查询结果的覆盖层，z-index设置后可以覆盖下面的内容
     -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      //节流函数
      if (this.timer) {
        clearTimeout(this.timer);
      }
      //当输入框没有关键字，list就没有,所以直接清空list
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const res = [];
        // 判断关键字是否存在于cities当中，cities是一个object，需要对其中每一项遍历，
        //如果keyword存在于value的spell或者name中，那么就将关键字放入res中；
        //最后list就是包含关键字的所有value值；
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              res.push(value);
            }
          });
        }
        this.list = res;
      }, 100);
    }
  },
  mounted() {
    //为了使搜索到的结果可以滚动--局部滚动
    this.scroll = new Bscroll(this.$refs.search);
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
