<script>

import '../assets/css/app.css';
import headerHtml from '../template/header.vue'
import mainItem from '../template/mainItem.vue'
import { mapState,mapActions } from 'vuex';
  export default {
    name: 'subMain'
    ,data:function(){
      return { list : $store.state.mainListByMajor }
    }
    ,computed:{
      ...mapState({
        list : 'mainListByMajor'
      })
    }
    ,created(){
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
        class="item" v-bind:href="'/forcast?id='+item.id+'&lat='+item.lat+'&lon='+item.lon" >    
      <mainItem v-bind:item="item"/>  
    </a>
  </div>
</div>
</template>