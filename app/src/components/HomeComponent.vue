<template>
  <MainLayout>
    <LoginComponent/>
  </MainLayout>
</template>

<script>
import LoginComponent from '@/components/magic/LoginComponent';
import MainLayout from '@/layouts/MainLayout'
export default {
  name: 'Home',
  components: {
    LoginComponent,
    MainLayout
  }
}
</script>
