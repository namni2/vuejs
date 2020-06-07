<template>
<div class="header">
    <div class="headLeft">
      <a href="javascript:return;" v-on:click="clickMap" style="text-decoration: none;" v-if="current==null || currentDate==''">
        <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
            style="color: white;"
          >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          ></path>
        </svg>  
      </a>

    <a href="/" v-if="current!=null && currentDate!=''">
        <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
            style="color: white;"
          >
            <path  d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path>
            </svg>
            <div class="current">
               {{currentData}}
            </div>
            </a>
    </div>
    <div class="headRight">
     {{currentDate()}}
    </div>
  </div> 
</template>

<script>

import '../assets/css/header.css'
import mapping from '../assets/js/mapping';
import callMap from '../assets/js/callMap';
import { mapActions } from 'vuex';

export default {
  name: 'headerHtml'
  ,props:['current']
  ,data:function(){
    return {
      currentDate:function(){
        const date = new Date();
        return date.getFullYear()+"."+('0'+(date.getMonth()+1)).slice(-2)+"."+('0'+(date.getDate())).slice(-2)
      },
      currentData: this.current!=null? mapping.cityNameMap[this.current] : ''
    }
  },methods:{
    clickMap:function(){
        callMap.init();
        callMap.currentByHeader((result)=>{
          this.callCurrentPosition({"lat":result.lat,"lon":result.lon,"addressInfo":result.addressInfo});
        })
    },...mapActions({ //왜 여기선 접근방식이 this.$store로 접근할 수 없지?
      callCurrentPosition:'callCurrentPosition'
    })
  }
}
</script>
