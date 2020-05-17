<template>
    <div class="weatherIcon">
        <div v-bind:class="icon">
            <div class="inner"></div>
        </div>
    </div>  
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
