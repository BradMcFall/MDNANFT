<template>
  <div>
    <HeaderComponent/>
  <main class="main">
    <slot/>
  </main>
    <FooterComponent/>
  </div>
</template>

<script>
import {getApi} from "@/service/api";
import HeaderComponent from "@/components/HeaderComponent"
import FooterComponent from "@/components/FooterComponent"

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  mounted(){
    this.test();
  },
  methods: {
    test() {
      getApi(
          '/ext/health',
          'health.getLiveness',
          []
      ).then(res => {
        console.log('api: Health');
        console.log('method: health.getLiveness');
        console.log(JSON.stringify(res));
      }).catch((err)=> {
        console.log('error: ' + err);
      });
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,body {
  min-height:100%;
  font: 12px Arial, sans-serif;
  overflow:auto;
}
.main {
  position: relative;
  min-height: 100vh;
  width:100%;
  background-color:#CCC;
}
a:active,
a:hover,
a:visited,
a:link {
  text-decoration: none;
  color: black;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  padding-right: 10px;
  font-weight: bold;
}
</style>
