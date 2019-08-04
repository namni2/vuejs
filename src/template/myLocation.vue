<template>
<div class="container">
      <div class="page-header" id="banner">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h1>현재위치</h1>
            <p class="lead"> <a href="#" @click="current">위치 확인</a></p>
          </div>
        </div>
      </div>
<div id="map" style="width:500px;height:400px;"></div>

 <info :weather-info="post" :seen="seen"></info>

</div>

</template>
<script>
import info from './info';
import map from '../assets/js/callMap';
map.init();

export default {
  name: 'myLocation'
  ,data:function(){
    return {
      post:{}
      ,seen:false
    }
  }
  ,methods:{
    current:function(){
      map.current( this.callWeather );
     ;
      event.preventDefault();
    },
    callWeather:function(pos){
      var url= 'https://api.openweathermap.org/data/2.5/weather?lat='+ pos.lat +'&lon='+ pos.lon+'&appid=a9a915167d70372959600a838dcc192e';

      this.$http.get(url)
        .then((result)=>{
          this.post = result.data;
          this.seen = true;
        })
    }
  },
  components:{info}
}
</script>

<style>
</style>
