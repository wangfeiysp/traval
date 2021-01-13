let defaultCity = '上海'

try{
  if(localStorage.city) {
    defaultCity = localStorage.city
  }
}catch (e) {}

export default {
    city: defaultCity//这里不应该写成固定的数据,可以引入localstorage本地存储
}