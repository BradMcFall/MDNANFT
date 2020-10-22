<template>
  <div>
    <Header/>
  <main class="main">
    <slot/>
  </main>
    <Footer/>
  </div>
</template>

<script>
import {getApi} from "@/service/api";
import Header from "@/components/header"
import Footer from "@/components/footer"

export default {
  components: {
    Header,
    Footer
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
article{
  padding:2%;
}
.main {
  height: 60vh;
  display: grid;
  font-size: 18px;
}
a:active,
a:hover,
a:visited,
a:link {
  text-decoration: none;
  color: black;
}
h1 {
  margin: 0;
  padding-bottom: 12px;
  font-size: 12px;
}
input,
button {
  padding: 9px;
  font-size: 12px;
  margin-bottom: 9px;
}
li {
  display: inline-block;
  padding-right: 10px;
  font-weight: bold;
}
</style>
