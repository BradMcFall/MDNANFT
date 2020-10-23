<template>
  <header>
    <h1>MDNANFT</h1>
    <nav>
      <ul>
        <li><a href="/">home</a></li>
      </ul>
    </nav>
    <span v-if="this.$store.state.magicLoggedInStatus">
      {{this.$store.state.loginEmail}} | <a href="/logout">logout</a>
    </span>
  </header>
</template>

<script>

import {getMagic,loginStatus,logout} from "@/auth/magic/magic";

export default {
  name: 'DashHome',
  m:{},
  components: {},
  data: function(){
    return {

    }
  },
  methods: {
    logout(){
      logout(this.m).then(()=>{
        alert('logged out');
      })
    },
    magic(){
      if(!this.$store.state.magicLoggedInStatus) {
        this.m = getMagic();
        loginStatus(this.m).then((status) => {
          if(!status){
            this.$router.push('/login')
          }
        })
      }
    }
  },
  beforeMount() {
  }
}
</script>

<style>
/* */
</style>
