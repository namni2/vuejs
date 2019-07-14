<template>
    <div>
        <button v-on:click="searchTerm">글 읽어오기</button>
        <div>
            <ul id="posts">
                <li v-for="item in post">{{ item.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'bodyHtml'
  ,data:function(){
      return {
          post:[]
      }
  }
  ,axios
  ,methods:{
      searchTerm:function(){
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((result)=>{
            console.log(result.data);
            this.post = result.data;
          })
      }
  }
}
</script>

<style>
</style>
