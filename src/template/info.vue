<template>
    <div id="info" v-if="seen"> 
        <div><span class="text-warning">현재온도 </span>: {{weatherInfo.main.temp - 273.15}}</div>
        <div>현재습도 : {{weatherInfo.main.humidity}}</div>
        <div>날씨 : {{weatherInfo.weather[0].main}}</div>
        <div>상세날씨설명 : {{weatherInfo.weather[0].description}}</div>
        <div>날씨 이미지 : {{weatherInfo.weather[0].icon}}</div>
        <div>바람 : {{weatherInfo.wind.speed}}</div>
        <div>나라 : {{weatherInfo.sys.country}}</div> 

        <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

    </div> 
</template>
<script>
import chart from '../assets/js/graph';

export default {
    name:'info',
    data: function(){
        return {
        }
    }
    ,props:['weatherInfo','seen']
    ,created:function(){
        
    }
    ,mounted:function(){
        chart.render();
    }
}
</script>
