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
  methods: {
    checkMagic(){
      // console.log('magic: ' + this.$store.state.magicLoggedInStatus)
      // if(!this.$store.state.magicLoggedInStatus){
      //   window.location.href = '/login';
      // }
    }
  },
  beforeMount () {
    this.checkMagic();
  }
}
</script>

<style>
.login_container{
  padding:2%;
}
</style>
