<template>
  <DashLayout>
    <div class="content">dash home</div>
  </DashLayout>
</template>
<script>
import DashLayout from "@/layouts/dashLayout";
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
  methods: {},
  beforeMount () {}
}
</script>

<style>
/* */
</style>
