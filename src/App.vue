<template>
  <div id="app">
   <contribution-map/>
  </div>
</template>

<script>
import ContributionMap from "@/components/ContributionMap";

export default {
  name: 'App',
  components: {
    ContributionMap,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
