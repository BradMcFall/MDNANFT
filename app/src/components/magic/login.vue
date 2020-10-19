<template>
  <MainLayout>

    <div id="magicApp" v-if="this.$store.state.magicLoggedInStatus === false
    && this.loaded === 'Loading...'">{{this.loaded}}</div>

    <div id="magicApp" v-if="this.$store.state.magicLoggedInStatus === false
    && this.loaded === 'Ready'">
      <MagicForm/>
    </div>

  </MainLayout>
</template>
<script>

import MainLayout from "@/layouts/mainLayout";
import MagicForm from "@/components/magic/form";
import {getMagic,loginStatus} from "@/auth/magic/magic";

export default {
  name: 'MagicLogin',
  components: {
    MainLayout,
    MagicForm
  },
  data: function () {
    return {
      loaded: 'Loading...',
      m:{},
      loginStatus:false
    }
  },
  methods: {
    async handleLogin(e){
      if(!this.$store.state.magicLoggedInStatus) {
        e.preventDefault();
        const email = new FormData(e.target).get("email");
        if (email) {
          await this.m.auth.loginWithMagicLink({email});
          const isLoggedIn = await this.m.user.isLoggedIn();
          if (isLoggedIn) {
            this.$store.state.magicLoggedInStatus = true;
            this.$store.state.loginEmail = email;
            await this.$router.push('/buyandsell')
          }
        }
      }
    },
    magic() {
      this.m = getMagic();
      loginStatus(this.m).then((status)=> {
        if (!status) {
          this.m.preload().then(() => {
            this.loaded = 'Ready';
            this.login();
          })
        }else{
          this.$router.push('/buyandsell')
        }
      })
    },
    login(){
      loginStatus(this.m).then((status)=>{
        this.$store.state.magicLoggedInStatus = !!status;
      })
    }
  },
  mounted () {
    this.magic();
  }
}
</script>

<style>
#magicApp {
  align-self: center;
  justify-self: center;
  background-color: #eee;
  text-align: center;
  width: 300px;
  padding: 27px 18px;
}
</style>
