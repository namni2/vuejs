<template>
    <!-- <div class="weatherIcon">
        <div v-bind:class="icon">
            <div class="inner"></div>
        </div> 
        
-->
    <img src="http://openweathermap.org/img/wn/10d.png" alt="">
</template>
<script>
import '../assets/css/icon.css';

export default {
    name:'WeatherIcon',
    props:['icon'],
    data:function(){
        return{
            icon:this.icon
        }
    }
}
</script>
