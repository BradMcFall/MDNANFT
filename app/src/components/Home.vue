<template>
  <div>home</div>
</template>

<script>
import { getApi } from '@/service/api'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      test: []
    }
  },
  methods: {
    api() {
      getApi(
          '/ext/health',
          'health.getLiveness',
          []
      ).then(res => {
        console.log('api: Health');
        console.log('method: health.getLiveness');
        console.log(JSON.stringify(res));
      })
    }
  },
  mounted () {
    this.api();
  }
}
</script>
