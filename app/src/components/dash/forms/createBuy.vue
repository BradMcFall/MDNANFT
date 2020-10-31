<template>
    <div class="buyForm">
    <div class="content"><b>If you would like to purchase a DNA mutation select and submit.</b></div>
<select multiple>
  <option>Mut1</option>
  <option>Mut2</option>
  <option>Mut3</option><br>
</select> 
 <li>
      <button type="submit">Submit purchase</button>
        </li>
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

