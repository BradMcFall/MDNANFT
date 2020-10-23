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

import Header from "@/components/header"
import Footer from "@/components/footer"

export default {
  components: {
    Header,
    Footer
  },
  mounted(){},
  methods: {}
};
</script>

<style>

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
