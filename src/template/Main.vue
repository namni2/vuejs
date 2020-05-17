<template>
  <div class="appContainer">
    <headerHtml/>
    <div class="main"> 
      <router-view/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import headerHtml from '../component/header'
import info from '../component/info'

export default {
  name: 'main',
  components:{ 
      headerHtml
  }
}
</script>

<style>
</style>
