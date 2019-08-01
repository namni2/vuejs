<template>
 <div class="container">

      <div class="page-header" id="banner">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h1>왜야아아</h1>
            <p class="lead">Flatly in night mode</p>
          </div>
        </div>
      </div>


        <select @change="search($event)" class="custom-select">
            <option value="">--지역--</option>
            <option value="seoul">서울</option>
            <option value="incheon">인천</option>
            <option value="daegu">대구</option>
            <option value="daejeon">대구</option>
        </select>

        <div v-if="seen">
            <div><span class="text-warning">현재온도 </span>: {{post.main.temp - 273.15}}</div>
            <div>현재습도 : {{post.main.humidity}}</div>
            <div>날씨 : {{post.weather[0].main}}</div>
            <div>상세날씨설명 : {{post.weather[0].description}}</div>
            <div>날씨 이미지 : {{post.weather[0].icon}}</div>
            <div>바람 : {{post.wind.speed}}</div>
            <div>나라 : {{post.sys.country}}</div>
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
         
          const url = 'http://api.openweathermap.org/data/2.5/weather?unit=metric&q='+location+'&appid=a9a915167d70372959600a838dcc192e'
       
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
