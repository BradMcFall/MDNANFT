<template>
  <DashLayout>
    <div class="content"><b>If you would like to purchase a DNA mutation select below and submit.</b></div>
<select multiple>
  <option>Mut1</option>
  <option>Mut2</option>
  <option>Mut3</option><br>
</select> 
 <li>
      <button type="submit">Submit purchase</button>
        </li>
 </DashLayout>
</template>
<script>
import DashLayout from "@/layouts/dashLayout";
export default {
  name: 'Buy',
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
