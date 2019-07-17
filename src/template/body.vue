<template>
    <div>
        <!--<button v-on:click="search('seoul')">서울</button>
        <button v-on:click="search('incheon')">경기</button>
        <button v-on:click="search('daegu')">대구</button>-->
        <select @change="search($event)">
            <option value="">--지역--</option>
            <option value="seoul">서울</option>
            <option value="incheon">인천</option>
            <option value="daegu">대구</option>
        </select>

        <div>
            <ul id="posts" v-if="seen">
                <li>현재온도 : {{post.main.temp - 273.15}}</li>
                <li>현재습도 : {{post.main.humidity}}</li>
                <li>날씨 : {{post.weather[0].main}}</li>
                <li>상세날씨설명 : {{post.weather[0].description}}</li>
                <li>날씨 이미지 : {{post.weather[0].icon}}</li>
                <li>바람 : {{post.wind.speed}}</li>
                <li>나라 : {{post.sys.country}}</li>
                <!--<li v-for="item in post">{{ item.title }}</li>-->
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'bodyHtml'
  ,data:function(){
      return {
          post:{}
          ,seen:false
          ,selected:''
      }
  }
  ,methods:{
      search:function(e){
          const location = e.target.value;
          if(location === '') {
              this.seen=false; 
              return;
          }
         
          const url = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a9a915167d70372959600a838dcc192e'
       
          this.$http.get(url)
          .then((result)=>{
            this.post = result.data;
            this.seen = true;
            console.log(this.post)
          })
      }
  }
}
</script>

<style>
</style>
