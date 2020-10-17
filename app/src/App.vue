<template>
  <div class="App">
    <HomeComponent/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style>
@import './assets/css/app.css';
</style>
