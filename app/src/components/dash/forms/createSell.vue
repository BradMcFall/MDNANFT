<template>
    <div class="SellForm">
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
</template>
<script>
export default {
  name:'createSell',
  data: function() {
    return {
//      username: this.$store.state.loginEmail,// do not want to use actual email as network user name
      username: '',
      password: '',
    }
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault()
      this.$parent.$parent.handleCreateUser(this.username,this.password);
      this.username = '';
      this.password = '';
    }
  }
}
</script>
<style scoped>
.sellForm{
}
.sellForm ul li{
  display:block;
  padding:3px;
}
button{
  padding:3px;
}
</style>
