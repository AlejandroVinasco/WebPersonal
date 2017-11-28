<template>
  <div id="app2">
	<test msg="Dont worry buddy. Everything will be ok."></test>
  </div>
</template>

<script>
import Test from './components/Test'

export default {
  name: 'app2',
  components: {
    Test
  }  
}
</script>

<style scoped>
#app2 {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 40px;
}
</style>