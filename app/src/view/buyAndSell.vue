<template>
  <MainLayout>
    <div class="login_container">
      <span>I am a:</span>
      <ul>
        <li><a href="/">buyer</a></li>
        <li><a href="/">seller</a></li>
      </ul>
    </div>
  </MainLayout>
</template>
<script>
import MainLayout from "@/layouts/mainLayout";
export default {
  name: 'BuyAndSell',
  components: {
    MainLayout
  },
  data() {
    return {
      test: []
    }
  },
  methods: {},
  beforeMount () {}
}
</script>

<style>
.login_container{
  padding:2%;
}
</style>
