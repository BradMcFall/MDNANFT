<template>
  <header>
    <h1>MoneyDance DNA NFT Dapp demonstration</h1>
    <nav>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/dash">dash</router-link></li>
      </ul>
    </nav>
    <div class="logout_container">
      <EmailDisplay />
    </div>
  </header>
</template>

<script>
import {getMagic,loginStatus,logout} from "@/auth/magic/magic";
import EmailDisplay from "@/components/auth/display/email";
//import Logoocd from "@/assets/logoocd";
export default {
  name: 'Home',
  m:{},
  components: {
    EmailDisplay,
  },
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
/* */
</style>
