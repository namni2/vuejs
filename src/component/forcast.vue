<template>
  <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
</template>
<script>

export default {
  name: 'forcast'
  ,data(){
    return {}
  },mounted(){  
        this.$store.dispatch('updateChart'); //차트 설정
        this.$store.dispatch('callForcastInfo');  //예보 부르기
    }
  
}
</script>

<style>
</style>
