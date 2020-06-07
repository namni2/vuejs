
<script>
import WeatherIcon from '../template/icon.vue';
export default {
    name: 'mainItem'
    ,props:['item']
    ,data:function(){
        return{
           
        }
    }
    ,components:{
      WeatherIcon
    }
}
</script>
<template>
    
    <div class="card">
        <div class="itemLeft">
            <div class="icon">
               <img v-bind:src="'http://openweathermap.org/img/wn/'+this.item.weatherIcon+'.png'" alt="">
            </div>
            <div class="location">{{this.item.city}}</div>
            <div class="country">{{this.item.country}}</div>
        </div>
        <div class="itemRight">
            <p class="temperature">{{this.item.temperature}}˚</p>
        </div>
    </div>
</template>