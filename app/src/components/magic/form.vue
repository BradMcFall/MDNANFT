<template>
  <div>
    <h1>Please sign up or login</h1>
    <form @submit="checkForm">
      <input type="email" name="email" required="required"
             placeholder="Enter your email" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>
<script>
export default {
  methods:{
    checkForm: function (e) {
      this.$parent.$parent.handleLogin(e);
    }
  }
}
</script>
