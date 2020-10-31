<template>
  <DashLayout>
      <div class="content">
      <CreateMarketForm/>
   </div>
 </DashLayout>
</template>
<script>
import CreateMarketForm from "@/components/dash/forms/createMarket";
import DashLayout from "@/layouts/dashLayout";
export default {
  name: 'Marketplace',
  components: {
    DashLayout,
    CreateMarketForm,
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
