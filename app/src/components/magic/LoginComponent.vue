<template>
  <div class="login_container">
    <span>I am a:</span>
  <ul>
    <li><a href="/">buyer</a></li>
    <li><a href="/">seller</a></li>
  </ul>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      test: []
    }
  },
  methods: {
  },
  mounted () {}
}
</script>

<style>
.login_container{
  padding:2%;
}
</style>
