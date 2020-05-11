<template>
 <div class="container">
     <div class="page-header" id="banner">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-sm-8">
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
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'major'
  ,data:function(){
      return {
      }
  }
  ,methods:{
    search : function (event){
       var location = event.target.value;
       this.$store.commit('setLocation', {'location':location});
 
         this.callTodayInfo(); //현재날씨
         this.callForcastInfo(); //예보
      
    },
    ...mapActions([
      'callTodayInfo'
      ,'callForcastInfo'
    ])
  }
  
}
</script>

<style>
</style>
