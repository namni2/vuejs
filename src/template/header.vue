<template>
      
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a href="" class="navbar-brand">WEATHER</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarResponsive" style="">
          <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="main">주요도시</a>
            </li>
          </ul>
        </div>
</nav>


 
</template>

<script>

export default {
  name: 'headerHtml'
  ,data:function(){
      return {
      }
  }
  ,methods:{
     
  }
}
</script>

<style>
#header {
    background-color: yellowgreen;
}
</style>
