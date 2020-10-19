<template>
  <header>
    <h1>MDNANFT</h1>
    <nav>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/buyandsell">buy/sell</router-link></li>
        <li><router-link to="/marketplace">marketplace</router-link></li>
      </ul>
    </nav>
    <span v-if="this.$store.state.magicLoggedInStatus">
      {{this.$store.state.loginEmail}} | <router-link to="/logout">logout</router-link>
    </span>
  </header>
</template>

<script>

import {getMagic,loginStatus,logout} from "@/auth/magic/magic";

export default {
  name: 'Home',
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
          this.$store.state.magicLoggedInStatus = !!status;
        })
      }
    }
  },
  beforeMount() {
    this.magic();
  }
}
</script>

<style>
header {
  display:block;
  height:20%;
  width: 100%;
  background-color: #999;
  padding: 2%;
}
header span{
  float:right;
}
</style>
