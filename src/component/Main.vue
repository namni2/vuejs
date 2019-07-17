<template>
  <div id="body">
    <headerHtml/>
     <bodyHtml/>
  </div>
</template>

<script>
import bodyHtml from '../template/body'
import headerHtml from '../template/header'

export default {
  name: 'main',
  components:{ //인스턴스에 컴포넌트 등록 키워드 components! router에서는 componentㅠㅠ
      bodyHtml //export의 name 속성과 동일해야함..
      ,headerHtml
  }
}
</script>

<style>
</style>
