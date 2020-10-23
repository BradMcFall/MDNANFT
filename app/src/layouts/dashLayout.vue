<template>
  <div>
    <DashHeader/>
  <main class="main">
    <div class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/dash">dash</router-link></li>
          <li><router-link to="/dash/marketplace">market</router-link></li>
          <li><router-link to="/dash/buy">buy</router-link></li>
          <li><router-link to="/dash/sell">sell</router-link></li>
        </ul>
      </nav>
      <aside>
        <!-- -->
      </aside>
    </div>
      <slot/>
  </main>
    <DashFooter/>
  </div>
</template>

<script>

import DashHeader from "@/components/dash/header"
import DashFooter from "@/components/dash/footer"

export default {
  components: {
    DashHeader,
    DashFooter
  },
  mounted(){
  },
  methods: {

  }
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
</style>
