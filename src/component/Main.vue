<template>
    <bodyHtml/>
   <!-- <div>hi??</div>-->
</template>

<script>
import bodyHtml from '../template/body'

export default {
  name: 'main',
  components:{ //인스턴스에 컴포넌트 등록 키워드 components! router에서는 component
      bodyHtml //export의 name 속성과 동일해야함..
  }
}
</script>

<style>
</style>
