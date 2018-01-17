<template>
  <div id="vue">
    <h1>Hello, {{ framework }}</h1>  
  </div>  
</template>

<script>
  export default {
    data() {
      return { framework: "Vue" }
    }    
  }
</script>

<style lang="sass" scoped>
  h1 {
    color: black;
  }
</style>

