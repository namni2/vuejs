<script>

import '../assets/css/app.css';
import headerHtml from '../template/header.vue'
import mainItem from '../template/mainItem.vue'
import { mapState,mapActions } from 'vuex';
  export default {
    name: 'subMain'
    
    ,computed: { //computed에 return되는 값이 종속적이면 리렌더링, 즉 staet값이 변경될 시 리렌더링
      list(){
        return this.$store.state.mainListByMajor
      }
    } 
    ,created(){
      console.log('proecssType',process.env.NODE_ENV , process.env.NODE_ENV === 'production')
       this.$store.dispatch('callMainCities'); 
    }
    ,components:{
       headerHtml,mainItem
    }
  }
</script>

<template> 
<div>
  <headerHtml/>
  <div class="section whatever"> 
    <a v-for="(item, index) in list" v-bind:key="index" 
        class="item" v-bind:href="'/vuejs/forcast?id='+item.id+'&lat='+item.lat+'&lon='+item.lon" >    
      <mainItem v-bind:item="item"/>  
    </a>
  </div>
</div>
</template>