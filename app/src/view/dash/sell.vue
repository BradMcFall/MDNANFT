<template>
  <DashLayout>
      <div class="content">
Your DNA sequence indicates that you have three mutations that are associated with Hyper Caridomyopathy. If you would like to sell your mutation sequence data to researchers please check the appropriate box below and submit.
   <form>
 <ul>
    <li>
  <input type="checkbox" id="gene1" name="gene1" value="betaMHC">
  <label for="gene1"> betaMHC </label>
    </li>
   <li>
<input type="checkbox" id="gene2" name="gene2" value="cTNT">
  <label for="gene3"> cTNT </label>
   </li>
<li>
  <input type="checkbox" id="gene3" name="gene3" value="MyBPC">
  <label for="vehicle3"> MyBPC </label>
 </li>
     <li>
 <button type="submit">Sell Mutation</button>
        </li>
</ul>
</form>
</div>
  </DashLayout>
</template>
<script>
//import CreateSellerForm from "@/components/seller/forms/sellDNA"
//import CreateUserForm from "@/components/dash/form/createUser"
import DashLayout from "@/layouts/dashLayout";
export default {
  name: 'Sell',
  components: {
    DashLayout,
   // CreateSellerForm
//   CreateUserForm
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
