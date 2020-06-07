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
</div>
</template>
<script>
import info from './info';
import map from '../assets/js/callMap';
map.init();

export default {
  name: 'current'
  ,data:function(){
    return {
      post:{}
      ,seen:false
    }
  }
  ,methods:{
    current:function(){
      map.current( this.callbackFunc ); //callback
      event.preventDefault();

    }, callbackFunc : function( data ){
      this.$store.commit("setLatLon", data ); //위도 경도 추가
      
      this.$store.dispatch('callTodayInfo'); //현재 날씨 
      this.$store.dispatch('callForcastInfo'); //예보
    }
    
  },
  components:{info}
}
</script>

<style>
</style>
