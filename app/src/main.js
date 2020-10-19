import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {getMagic,loginStatus} from "@/auth/magic/magic";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeMount(){
    let m = getMagic();
    loginStatus(m).then((status)=> {
      if(status){
        m.user.getMetadata().then((data)=>{
          this.$store.state.loginEmail = data.email;
        })
        this.$store.state.magicLoggedInStatus = true;
      }
    })
  },
  render: h => h(App),
}).$mount('#app');
