<template>
  <div class="hello">
    <div>Start Play</div>
    <div>The Answer Is: </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import testCode from './testCode.js'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 在我们的组件中
  setup () {
    onMounted(testCode) // 在 `mounted` 时调用 `getUserRepositories`
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
