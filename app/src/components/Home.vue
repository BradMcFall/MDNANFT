<template>
  <div>home</div>
</template>

<script>
import { getTest } from '../service/test'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      test: []
    }
  },
  methods: {
    getTest() {
      getTest().then(response => {
        console.log(response)
      })
    }
  },
  mounted () {
    this.getTest();
  }
}
</script>
