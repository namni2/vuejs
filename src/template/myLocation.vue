<template>
<div class="container">
      <div class="page-header" id="banner">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h1>my Location</h1>
            <p class="lead">내 위치에서 찾아보기 !</p>
          </div>
        </div>
      </div>

<div id="map" style="width:500px;height:400px;"></div>
</div>
</template>

<script>
 /*   $.getScript('http://dapi.kakao.com/v2/maps/sdk.js?appkey=25aa7599488289b0dab2f101d00b97e0&libraries=services')

  console.log(window.daum)
   var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center : new daum.maps.LatLng(36.633535, 127.425882), // 지도의 중심좌표
        level : 4
    // 지도의 확대 레벨
    };
  
  var map = new kakao.maps.Map(container, options);*/
export default {
  name: 'myLocation'
}
</script>

<style>
</style>
