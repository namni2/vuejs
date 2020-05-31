
<script>
import WeatherIcon from '../template/icon.vue';
export default {
    name: 'mainItem'
    ,props:['item']
    ,data:function(){
        return{
            id:this.item.id
            ,city:this.item.city
            ,country:this.item.country
            ,temperature:this.item.temperature
            ,iconId: this.item.weatherIcon
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
               <img v-bind:src="'http://openweathermap.org/img/wn/'+iconId+'.png'" alt="">
            </div>
            <div class="location">{{city}}</div>
            <div class="country">{{country}}</div>
        </div>
        <div class="itemRight">
            <p class="temperature">{{temperature}}˚</p>
        </div>
    </div>
</template>