<template>
 <div class="container">
     <div class="page-header" id="banner">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h1>주요도시 </h1>
            <p class="lead">지역을 선택해주세요</p>
          </div>
        </div>
      </div>
      <select @change="search($event)" class="custom-select">
          <option value="">--지역--</option>
          <option value="seoul">서울</option>
          <option value="incheon">인천</option>
          <option value="daegu">대구</option>
          <option value="daejeon">대전</option>
      </select>
      <info :weather-info="post" :seen="seen"></info>
    </div>
</template>
<script>
import info from './info';

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
          const url = 'https://api.openweathermap.org/data/2.5/weather?unit=metric&q='+location+'&appid=a9a915167d70372959600a838dcc192e'
       
          this.$http.get(url)
          .then((result)=>{
            this.post = result.data;
            this.seen = true;
          })
      }
  }
  ,components:{
    info
  }
}
</script>

<style>
</style>
