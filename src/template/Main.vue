<template>
  <div>
    <headerHtml/>
    <div> 
      <router-view/>
    </div>
    <div>
      <info></info>
    </div>
  </div>
</template>

<script>
import headerHtml from '../component/header'
import info from '../component/info'

export default {
  name: 'main',
  components:{ 
      headerHtml,info
  }
}
</script>

<style>
</style>
