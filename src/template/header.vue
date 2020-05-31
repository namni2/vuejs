<template>
<div class="header">
    <div class="headLeft">
      <a href="/" style="text-decoration: none;">
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

       <!-- <a href="/portfolio_weatherWeb/" 
          ><svg
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
              d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
            ></path></svg
        ></a> -->
    </div>
    <div class="headRight">
     {{currentDate()}}
    </div>
  </div> 
</template>

<script>

import '../assets/css/header.css'
export default {
  name: 'headerHtml'
  ,data:function(){
    return {
      currentDate:function(){
         const date = new Date();
         
         //2020.05.05 PM 07:08
        return date.getFullYear()+"."+('0'+(date.getMonth()+1)).slice(-2)+"."+date.getDate()+" "
        +date.getHours()+":"+date.getMinutes()+"";
        }
    }
  }
}
</script>
