import $ from 'jquery';

let callMap = { 
    map : null ,
    draw : function(){
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center : new kakao.maps.LatLng(36.633535, 127.425882), // 지도의 중심좌표
            level : 4
        // 지도의 확대 레벨
        };
      
        callMap.map =new kakao.maps.Map(mapContainer, mapOption);
    },
    init : function(){
        $.getScript('//dapi.kakao.com/v2/maps/sdk.js?appkey=9ced506ecc4ce66b5b7921c530959da9&libraries=services,drawing&autoload=false').done(function(data){
            let daumMakers = window.daum.maps;
            daumMakers.load(function(){
                callMap.draw();
            });
        });
    }, 
    current : function(callback) {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
              var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도

                var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                message = '<div style="padding:3px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
                    // 마커와 인포윈도우를 표시합니다
                callMap.displayMarker(locPosition, message);
                if(callback) {
                    callback( {"lat":lat,"lon":lon} );
                }
            },function(failText){console.log(failText)});   
        }
       
    },displayMarker : function(location, message){
        var map = callMap.map;

        var marker = new kakao.maps.Marker({  
            map: map, 
            position: location
         }); 
 
        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;
 
 
        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
     
        // 인포윈도우를 마커위에 표시합니다 
        infowindow.open(map, marker);
        map.setCenter(location);  
     
    }
}



export default callMap

