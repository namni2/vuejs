
<script>
 
import WeatherIcon from '../template/icon.vue';
  export default {
    name: 'subMain'
    ,data:function(){
      return{
        sendIcon:'mostlysunny'
      }
    }
    ,components:{
      WeatherIcon
    }
  }
</script>

<template>
  <div class="section whatever">
            <a class="item">
              <div class="card">
                <div class="itemLeft">
                  <div class="icon">
                     <WeatherIcon v-bind:icon="sendIcon"/>
                  </div>
                  <div class="location">서울</div>
                  <div class="country">대한민국</div>
                </div>
                <div class="itemRight">
                  <p class="temperature">20˚</p>
                </div>
              </div>
            </a>
            <a class="item">
              <div class="card">
                <div class="itemLeft">
                  <div class="icon">
                    <WeatherIcon/>
                  </div>
                  <div class="location">서울</div>
                  <div class="country">대한민국</div>
                </div>
                <div class="itemRight">
                  <p class="temperature">20˚</p>
                </div>
              </div>
            </a>

            <a class="item">
              <div class="card">
                <div class="itemLeft">
                  <div class="icon">
                    <WeatherIcon/>
                  </div>
                  <div class="location">서울</div>
                  <div class="country">대한민국</div>
                </div>
                <div class="itemRight">
                  <p class="temperature">20˚</p>
                </div>
              </div>
            </a>

            <a class="item">
              <div class="card">
                <div class="itemLeft">
                  <div class="icon">
                   <WeatherIcon/>
                  </div>
                  <div class="location">서울</div>
                  <div class="country">대한민국</div>
                </div>
                <div class="itemRight">
                  <p class="temperature">20˚</p>
                </div>
              </div>
            </a>
          </div>
</template>