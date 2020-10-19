<template>
  <MainLayout>
    <div class="login_container">
      <span>Marketplace</span>
    </div>
  </MainLayout>
</template>
<script>
import MainLayout from "@/layouts/mainLayout";
export default {
  name: 'Marketplace',
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
      // let auth = this.$store.state.magicLoggedInStatus;
      // if(!auth){
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
/* */
</style>
