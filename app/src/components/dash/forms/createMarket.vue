<template>
    <div class="Marketplace">
<table> <caption>The Transaction History</caption> <thead> <tr> <th>Transaction</th> <th>Asset</th> <th>Blockchain</th> <th>From</th> <th>To</th> <th>Value</th> <th>Fee</th> </tr> </thead> <tbody> <tr> <td>Transaction 1</td> <td>DNANFT1</td> <td>X-chain123</td> <td>xyz</td> <td>xyz</td> <td>123</td> <td>123</td> </tr> <tr> <td>Transaction2</td> <td>AVAX</td> <td>X-chain1</td> <td>xyz</td> <td>xyz</td> <td>14</td> <td>456</td> </tr> </tbody> <tfoot> <tr> <td colspan="4"><em>Avalanche Explorer</em> has the rest of the details about the transaction <em>The Fuji Testnetwork</em> is where these transactions are being made. This can be viewed further here .<a href="https://explorer.avax-test.network/" target="_blank">Fuji</a> for details.</td> </tr> </tfoot> </table>
  </div>
</template>
<script>
export default {
  name:'createUser',
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
.userForm{
}
.userForm ul li{
  display:block;
  padding:3px;
}
button{
  padding:3px;
}
</style>
