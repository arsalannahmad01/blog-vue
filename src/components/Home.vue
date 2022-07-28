<template>
  <Header />
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'HomePage',
  components: {
    Header
  },
  async mounted() {
    let user = await localStorage.getItem('token')
    if(!user) {
      this.$router.push({name: 'LogIn'})
    }
  }
}
</script> 