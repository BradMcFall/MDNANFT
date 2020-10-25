<template>
  <DashLayout>
    <div class="content">dash home</div>
  </DashLayout>
</template>
<script>
import DashLayout from "@/layouts/dashLayout";
import {getApi} from "@/service/api";
export default {
  name: 'DashHome',
  components: {
    DashLayout
  },
  data() {
    return {
      test: []
    }
  },
  methods: {
    createUser() {
      getApi(
          '/ext/keystore',
          'keystore.createUser',
          [
            {
              'username':'usertest2',
              'password':'Yx88x888(%44x%%%'
            }
          ]
      ).then(res => {
        console.log('api: Health');
        console.log('method: health.getLiveness');
        console.log(JSON.stringify(res));
      })
    }
  },
  beforeMount () {
    this.createUser();
  }
}
</script>

<style>
/* */
</style>
