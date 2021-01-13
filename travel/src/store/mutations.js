export default {
  //mutation接受两个参数，第一个是state，第二个是传入的参数
  changeCity(state, city) {
    state.city = city
    //存入数据
    try{
      localStorage.city = city 
    }catch (e) {}
  }
}