<template>
  <div class="col-lg-8 col-md-7 col-sm-6">
      <!--<div>  {{location}} </div>-->
        <div><span class="text-warning">현재온도 </span>{{weatherInfo.main.temp - 273.15}}</div>
      <div>현재습도 : {{weatherInfo.main.humidity}}</div>
      <div>날씨 : {{weatherInfo.weather[0].main}}</div>
      <div>상세날씨설명 : {{weatherInfo.weather[0].description}}</div>
      <div>날씨 이미지 : {{weatherInfo.weather[0].icon}}</div>
      <div>바람 : {{weatherInfo.wind.speed}}</div>
      <div>나라 : {{weatherInfo.sys.country}}</div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
 var iconurl = "http://openweathermap.org/img/w/01n.png";

export default {
  name: 'today'
  ,data:function(){
      return {}
  },computed:{
      ...mapState({
        location:'location', weatherInfo:'todayInfo'   
      })
  }, methods:{
  }
}
</script>

<style>
</style>
